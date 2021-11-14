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

// // SELECT PLAY AND PAUSE BUTTON - yiling
// const play = document.querySelector(".play"),
//   pause = document.querySelector(".pause");

// // SELECT AUDIO ELEMENT -yiling
// const audio = document.querySelector(".audio audio");


// // PLAY AUDIO-yiling
// play.addEventListener("click", () => {
//     isPlaying = true;
//     audio.play();
//   });
//   // PAUSE AUDIO-yiling
//   pause.addEventListener("click", () => {
//     isPlaying = false;
//     audio.pause();
//   });





