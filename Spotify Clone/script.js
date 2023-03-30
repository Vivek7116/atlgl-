
console.log("Spotify")
let MasterSongName = document.getElementById("MasterSongName")
let AudioElement = new Audio('songs/1.mp3')
let SongIndex = 0
let MasterPlay = document.getElementById("startAudio")
let MyProgressBar = document.getElementById("MyProgressBar")
let gif = document.getElementById("gif")
let ForwardAudio = document.getElementById("forwardAudio")
let BackwardAudio = document.getElementById("backwardAudio")
let SongItems = Array.from( document.getElementsByClassName("songItem"))
let songs= [
    {SongName: "Unstoppable", CoverFile: "covers/1.jpg" , PathFile: "songs/1.mp3"},
    {SongName: "Memories", CoverFile: "covers/2.jpg" , PathFile: "songs/2.mp3"},
    {SongName: "Levitating", CoverFile: "covers/3.jpg" , PathFile: "songs/3.mp3"},
    {SongName: "Count on me", CoverFile: "covers/4.jpg" , PathFile: "songs/4.mp3"},
    {SongName: "Jalebi baby", CoverFile: "covers/5.jpg" , PathFile: "songs/5.mp3"},
    {SongName: "Thinking Out Loud", CoverFile: "covers/6.jpg" , PathFile: "songs/6.mp3"},
    {SongName: "Blank Space", CoverFile: "covers/7.jpg" , PathFile: "songs/7.mp3"},
    {SongName: "Shape of You", CoverFile: "covers/8.jpg" , PathFile: "songs/8.mp3"},
    {SongName: "Cheap Thrills", CoverFile: "covers/9.jpg" , PathFile: "songs/9.mp3"},
    {SongName: "Stiches", CoverFile: "covers/10.jpg" , PathFile: "songs/10.mp3"},
]

SongItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].CoverFile;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
})
MasterPlay.addEventListener("click", function playPause(){
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play()
        MasterPlay.classList.remove("fa-circle-play")
        MasterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1
    } else{
        AudioElement.pause()
        MasterPlay.classList.add("fa-circle-play")
        MasterPlay.classList.remove("fa-circle-pause")
        gif.style.opacity = 0
    }
})

AudioElement.addEventListener("timeupdate", function timeupdate(){
    progress = parseInt((AudioElement.currentTime/AudioElement.duration) * 100)
    MyProgressBar.value = progress
})

MyProgressBar.addEventListener("change", function changedTime(){
    AudioElement.currentTime = MyProgressBar.value * AudioElement.duration/100
})

const MakeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=>{
        element.classList.remove( "fa-circle-pause")
        element.classList.add("fa-circle-play")
        })
    }

Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
            MakeAllPlays()
        SongIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        AudioElement.src = `songs/${SongIndex+1}.mp3`
        AudioElement.currentTime = 0
        AudioElement.play()
        MasterPlay.classList.add("fa-circle-pause")
        MasterPlay.classList.remove("fa-circle-play")
        gif.style.opacity = 1;
        MasterSongName.innerText = songs[SongIndex].SongName
    
    })
})

document.getElementById("Next").addEventListener("click", ()=>{
    if (SongIndex>=9){
        SongIndex = 0;
    } else{
        SongIndex += 1
    }
    AudioElement.src = `songs/${SongIndex+1}.mp3`
    AudioElement.currentTime = 0
    AudioElement.play()
    MasterPlay.classList.add("fa-circle-pause")
    MasterPlay.classList.remove("fa-circle-play")
    MasterSongName.innerText = songs[SongIndex].SongName
    gif.style.opacity = 1;
})

document.getElementById("Previous").addEventListener("click", ()=>{
    if (SongIndex<=0){
        SongIndex = 9;
    } else{
        SongIndex -= 1
    }
    AudioElement.src = `songs/${SongIndex+1}.mp3`
    AudioElement.currentTime = 0
    AudioElement.play()
    MasterPlay.classList.add("fa-circle-pause")
    MasterPlay.classList.remove("fa-circle-play")
    MasterSongName.innerText = songs[SongIndex].SongName;
    gif.style.opacity = 1;
})