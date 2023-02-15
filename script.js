document.querySelector('.start').addEventListener('click', start)
document.querySelector('.pause').addEventListener('click', pause)
document.querySelector('.restart').addEventListener('click', restart)

document.querySelector('.focus').addEventListener('click', red)
document.querySelector('.short').addEventListener('click', green)
document.querySelector('.long').addEventListener('click', blue)


let focusCount = 1500
let shortCount = 300
let longCount = 600

seconds = focusCount
let interval = null

function timer(){
        seconds--

        let sec = seconds % 60
        let min = Math.floor(seconds / 60)

        if (sec < 10) {
            sec = `0${sec}`
        }

        if (min < 10) {
            min = `0${min}`
        }

        document.querySelector('.timer').innerHTML = `${min}:${sec}`
}

function start() {
    if (interval) {
        return
    }
        
    interval = setInterval(timer, 1000)

    document.querySelector('.start').style.display = 'none'
    document.querySelector('.pause').style.display = 'block'
}

function pause() {
    clearInterval(interval)
    interval = null
    document.querySelector('.start').style.display = 'block'
    document.querySelector('.pause').style.display = 'none'
}

function restart() {
    seconds = 
    document.querySelector('.timer').innerHTML = '25:00'
}


function red() {
    document.querySelector('.color').classList.add('red')
    document.querySelector('.color').classList.remove('green')
    document.querySelector('.color').classList.remove('blue')
    document.querySelector('.timer').innerHTML = '25:00'
    // pausar o contador quando torcar de tipo
    seconds = focusCount
}

function green() {
    document.querySelector('.color').classList.add('green')
    document.querySelector('.color').classList.remove('red')
    document.querySelector('.color').classList.remove('blue')
    document.querySelector('.timer').innerHTML = '05:00'

    seconds = shortCount
}

function blue() {
    document.querySelector('.color').classList.add('blue')
    document.querySelector('.color').classList.remove('red')
    document.querySelector('.color').classList.remove('green')
    document.querySelector('.timer').innerHTML = '10:00'

    seconds = longCount
}