let data = {
    title: [
        "Xatuba-Karavan",
        "Xatuba-Hay qajer",
        "Kate Bush-Army Dreamers"
    ],
    song: [
        "music/XATUBA-KARAVAN-world75.spcs.bio.mp3",
        "music/Xatuba-Hay_qajer-world75.spcs.bio.mp3",
        "music/Kate_Bush_-_Army_Dreamers_@BaseNaija.mp3"
    ],
    poster: [
        "https://images.hdqwalls.com/wallpapers/desert-moon-4k-lk.jpg",
        "https://images.hdqwalls.com/wallpapers/desert-moon-4k-lk.jpg",
        "https://courtneyssoundworld.files.wordpress.com/2015/05/kate-bush.gif",
    ],
}

let currentSong = 0
let song = new Audio()

function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
    song.play()
}
function next(){
    currentSong += 1
    if(currentSong >= data.song.length){

        currentSong = 0
    }
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";

}
function pre(){
    currentSong -= 1 
     if(currentSong < 0){

        currentSong = data.song.length - 1
    }
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
  

}

function playOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    }
    else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }


}
window.onload = function () {
    playSong()
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 100 + "%"
    converTime(song.currentTime)
    if(song.ended){
        next()
    }
})



function converTime(seconds) {
    currentTime = document.getElementsByClassName("currentTime")
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;
    
    currentTime[0].textContent = min + ':' + sec 

    totalTime(song.duration)
}

function totalTime(seconds){
    
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;

    currentTime[0].textContent += "/" + min + ':' + sec

}
