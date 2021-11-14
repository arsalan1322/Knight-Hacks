const container = document.getElementById('container')
const text = document.getElementById('text')
//for randomizing video/audio
var source = document.createElement('source')
var source2 = document.createElement('source')

const totalTime = 16000
const breatheTime = totalTime / 4
const holdTime = totalTime / 4

breatheAnimation()

function breatheAnimation(){
    text.innerHTML = 'Breathe In'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold...'

        setTimeout(() => {
            text.innerText = 'Breathe Out'
            container.className = 'container shrink'
            
            setTimeout(() => {
                text.innerText = 'Hold...'

            }, breatheTime);
        }, holdTime);
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime)

//start of riyan's part
//end of riyan's part

// SELECT PLAY ID -pirooz
const play = document.getElementById("playpause");

// SELECT AUDIO & VIDEO ELEMENT -yiling
const audio = document.querySelector(".audio audio");
const video = document.querySelector(".video video");
function playVideoAudio(){
    if (play.checked != false){
        audio.play();
        video.play();
    }
    else{
        audio.pause();
        video.pause();
    }
}


// PLAY/PAUSE AUDIO -yiling/pirooz
play.addEventListener("click", () => {
    playVideoAudio();
  });

const theme = ['stones', 'ocean', 'campfire']
const randomElement = theme[Math.floor(Math.random() * theme.length)];

//list of video/audio pairs
source.setAttribute('src', "./assets/video/" + randomElement + '.mp4')
source.setAttribute('type', 'video/mp4')
video.appendChild(source)

source2.setAttribute('src', "./assets/audio/" + randomElement + '.mp3')
source2.setAttribute('type', 'audio/mp3')
audio.appendChild(source2)