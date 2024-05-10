let data = {
    title: [
        "Xatuba Karavan",
        "Xatuba Hay qajer",
        "Kate Bush-Army Dreamers"
    ],
    song: [
        "music/XATUBA-KARAVAN-world75.spcs.bio.mp3",
        "music/Xatuba-Hay_qajer-world75.spcs.bio.mp3",
        "music/Kate_Bush_-_Army_Dreamers_@BaseNaija.mp3"],
    poster: [
        "https://media.soundoflife.com/articles/476/An_Introduction_To_Minimalism_Article_cover.gif",
        "https://cdn.dribbble.com/users/508806/screenshots/7847569/media/ab03a3f581f175ac3c4ae322ba08d754.gif",
        "https://courtneyssoundworld.files.wordpress.com/2015/05/kate-bush.gif",
    ]
}

let currentSong = 0
let song= new Audio()
window.onload = function(){
    playSong()
}
function playSong (){
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songtitle");   
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementsByClassName("row1");
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main");
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play()
}

function playOrPauseSong(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src = "images/pause.png"
    }
    else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }    

    
}