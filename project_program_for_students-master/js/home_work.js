const gmailInput = document.querySelector('#gmail_input')
const btn = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp= /\W+gmail.com/

btn.addEventListener('click', () => {
        if (regExp.test(gmailInput.value)){
            gmailResult.innerHTML = 'you have written correct'
            gmailResult.style.color = 'green'
        } else {
            gmailResult.innerHTML = 'you have written incorrect'
            gmailResult.style.color = 'red'
        }
    })

const blockMove = document.querySelector('.child_block')

let positionX = 0
let  positionY = 0
const  move = () => {
    if (positionX < 449 && positionY === 0) {
        positionX++
        blockMove.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX >= 449 && positionY < 449) {
        positionY++
        blockMove.style.top = `${positionY}px`
        setTimeout(move, 10)
    } else if (positionX > 0 && positionY >= 449) {
        positionX--
        blockMove.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX >= 0 && positionY > 0) {
        positionY--
        blockMove.style.top = `${positionY}px`
        setTimeout(move, 10)
    }
}
move()

const startTime = document.querySelector('#seconds')
const btnStart = document.querySelector('#start')
const btnReset = document.querySelector('#reset')
const btnStop = document.querySelector('#stop')

let interval;
let second = 0;


const startTimer = () => {
    second++;
    startTime.innerHTML = second;

    if (second === 100) {
        clearInterval(interval)
    }
}

btnStop.addEventListener('click', () => {
    clearInterval(interval)
})
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    second = 0;
})
btnStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000);
})



