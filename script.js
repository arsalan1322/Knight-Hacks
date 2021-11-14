const container = document.getElementById('container')
const text = document.getElementById('text')

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
console.log(play.checked)
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