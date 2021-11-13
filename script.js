const container = document.querySelector('.main-container')
const text = document.querySelector('#tutorial')

const totalTime = 16000
const breatheTime = totalTime / 4
const holdTime = totalTime / 4

breatheAnimation()

function breatheAnimation(){
    text.innerHTML = 'BREATHE! BREATHE! (in)'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'hold...'

        setTimeout(() => {
            text.innerText = 'BREATHE! BREATHE! (out)'
            container.className = 'container shrink'
            
            setTimeout(() => {
                text.innerText = 'hold...'

            }, breatheTime)
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)