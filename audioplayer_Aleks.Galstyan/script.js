let data = {
    title: [
        "LONOWN-Sleepwalker",
        "Xatuba-Karavan",
        "Xatuba-Hay qajer",
        "Kate Bush-Army Dreamers",
        "Orange-Sector - Farben",
    ],
    song: [
        "music/akiaura_LONOWN-Sleepwalker_(Slowed)-world75.spcs.bio.mp3",
        "music/XATUBA-KARAVAN-world75.spcs.bio.mp3",
        "music/Xatuba-Hay_qajer-world75.spcs.bio.mp3",
        "music/Kate_Bush_-_Army_Dreamers_@BaseNaija.mp3",
        "music/orange-sector-farben-mp3.mp3",
    ],
    poster: [
        "https://i1.sndcdn.com/artworks-85PlUljfKOQkBsUX-1EOWyw-t500x500.jpg",
        "https://images.hdqwalls.com/wallpapers/desert-moon-4k-lk.jpg",
        "images/hayqajer.jpeg",
        "https://courtneyssoundworld.files.wordpress.com/2015/05/kate-bush.gif",
        "https://steamuserimages-a.akamaihd.net/ugc/1710790339046332398/028D5D04D44A698B4F16646088BA844A5493EC1F/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    ],
}
let currentSong = 0;
let song = new Audio();
window.onload = function () {
    updateSongDetails();
}
function updateSongDetails() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songtitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementsByClassName("row1");
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main");
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();

}

function playSong() {
    song.src = data.song[currentSong];
    updateSongDetails();
}



function playOrPauseSong() {
    let play = document.getElementById("play");
    if (song.paused) {
        song.play();
        play.src = "images/pause.png";
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png";
    }
}

function next() {
    currentSong++
    play.src = "images/pause.png";
    if (currentSong >= data.song.length) {
        currentSong = 0;
    }
    song.src = data.song[currentSong];
    updateSongDetails();
}

function pre() {
    currentSong -= 1;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    song.src = data.song[currentSong];
    updateSongDetails();
}
function resetTimeDisplay() {
    let currentTime = document.getElementsByClassName("currentTime");
    currentTime[0].textContent = "00:00/00:00";
}
function converTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime");
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent = min + ':' + sec;
    totalTime(song.duration);
}

function totalTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime");
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent += "/" + min + ':' + sec;
}




song.addEventListener("timeupdate", function () {
    let fill = document.querySelector(".fill");
    let position = song.currentTime / song.duration;
    fill.style.marginLeft = position * 100 + "%";
    converTime(song.currentTime);
    if (song.ended) {
        next();
    }

});


// Mute Button and Volume Control
let muteButton = document.getElementById("mute");

function mute() {
    let mutes = document.getElementById("mute")
    if (song.muted) {
        song.muted = false;
        mutes.src = "images/volume.png";
    } else {
        song.muted = true;
        mutes.src = "images/volume-mute.png";
    }
}

// Function to adjust volume
function adjustVolume() {
    let volumeSlider = document.getElementById("volume-slider");
    song.volume = volumeSlider.value;
    let muteButton = document.getElementById("mute");
    if (song.volume === 0) {
        song.muted = true;
        muteButton.src = "images/volume-mute.png";
    } else {
        song.muted = false;
        muteButton.src = "images/volume.png";
    }
}




// Update time slider position
document.addEventListener("DOMContentLoaded", function () {
    const handle = document.querySelector(".handle");
    const fill = document.querySelector(".fill");
    const seekBar = document.querySelector(".seek-bar");

    let isDragging = false;

    seekBar.addEventListener("click", function (e) {
        updateFillPosition(e.clientX);
    });

    handle.addEventListener("mousedown", function (e) {
        isDragging = true;
        updateFillPosition(e.clientX);
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            updateFillPosition(e.clientX);
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    function updateFillPosition(mouseX) {
        const seekBarRect = seekBar.getBoundingClientRect();
        let offsetX = mouseX - seekBarRect.left;
        if (offsetX < 0) {
            offsetX = 0;
        } else if (offsetX > seekBarRect.width) {
            offsetX = seekBarRect.width;
        }
        const percentage = offsetX / seekBarRect.width;
        handle.style.left = (percentage * 100) + "%";
        song.currentTime = percentage * song.duration;
    }
})



function playSelectedSong(index) {
    currentSong = index;
    playSong();
    updateSongDetails();
}
