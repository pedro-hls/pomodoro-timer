document.querySelector('.start').addEventListener('click', start)
document.querySelector('.pause').addEventListener('click', pause)
document.querySelector('.restart').addEventListener('click', restart)

document.querySelector('.focus').addEventListener('click', red)
document.querySelector('.short').addEventListener('click', green)
document.querySelector('.long').addEventListener('click', blue)

document.querySelector('.show-settings').addEventListener('click', showSettings)
document.querySelector('.show-tasks').addEventListener('click', showTasks)

document.querySelector('.resetList').addEventListener('click', resetList)
// Opção alternativa: fazer um objeto com as 3 opções de cores, puxar o index da cor ao clicar, esconder o index atual - 1 e index atual -2
// obj = [ r g b ]

let interval = null

focusCount = 1500
shortCount = 300
longCount = 600

seconds = 1500

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

    if (seconds <= 0 && min == 0) {
        clearInterval(interval)
        interval = null

        let audio = document.querySelector('.timerSound')

        audio.currentTime=0
        audio.volume = 0.1
        audio.play()

        restart()

        document.querySelector('.timer').innerHTML = '00:00'
    }
        
}

colorBanner = document.querySelector('.color')

function displayStart() {
    document.querySelector('.start').style.display = 'block'
    document.querySelector('.pause').style.display = 'none'
}

function displayPause() {
    document.querySelector('.start').style.display = 'none'
    document.querySelector('.pause').style.display = 'block'
}

function red() {

    colorBanner.classList.add('red')
    colorBanner.classList.remove('green')
    colorBanner.classList.remove('blue')
    document.querySelector('.timer').innerHTML = '25:00'

    displayStart()

    clearInterval(interval)
    interval = null

    seconds = focusCount
}

function green() {

    colorBanner.classList.add('green')
    colorBanner.classList.remove('red')
    colorBanner.classList.remove('blue')
    document.querySelector('.timer').innerHTML = '05:00'

    displayStart()

    clearInterval(interval)
    interval = null

    seconds = shortCount
}

function blue() {

    colorBanner.classList.add('blue')
    colorBanner.classList.remove('red')
    colorBanner.classList.remove('green')
    document.querySelector('.timer').innerHTML = '10:00'

    displayStart()

    clearInterval(interval)
    interval = null

    seconds = longCount
}

function start() {
    if (interval) {
        return
    }
        
    interval = setInterval(timer, 1000)

    displayPause()

    let audio = document.querySelector('.startSound')
    audio.currentTime=0
    audio.volume = 0.02
    audio.play()
}

function pause() {
    clearInterval(interval)
    interval = null

    displayStart()

    let audio = document.querySelector('.pauseSound')
    audio.currentTime=0
    audio.volume = 0.02
    audio.play()
}


function restart() {
    if (colorBanner.classList.contains('red')) {
        document.querySelector('.timer').innerHTML = '25:00'
        seconds = focusCount
    }

    if (colorBanner.classList.contains('green')) {
        document.querySelector('.timer').innerHTML = '05:00'
        seconds = shortCount
    }

    if (colorBanner.classList.contains('blue')) {
        document.querySelector('.timer').innerHTML = '10:00'
        seconds = longCount
    }

    clearInterval(interval)
    interval = null

    displayStart()
}

function showSettings() {
    let set = document.querySelector('.settings')
    set.classList.toggle('showPopup')
}

function showTasks() {
    let set = document.querySelector('.tasks')
    set.classList.toggle('showPopup')
}

const input = document.querySelector('.taskInput')
const list = document.querySelector('.taskList')

taskNumber = 0

function addTask(e) {

    if (e.key === 'Enter' && taskNumber < 6) {

        const newTask = document.createElement('li')

        newTask.innerHTML = 
        `<input type="checkbox" id="checkList" name="checkList" class="newItem"> ${input.value}`
        input.value = ""

        list.appendChild(newTask)

        taskNumber++
        
    }
}

input.addEventListener('keyup', addTask)

function resetList() {
    var listaCompleta = document.querySelector('.taskList').childNodes
    for(remove = 0 ; remove <= 6; remove++) {
    document.querySelector('.taskList').removeChild(listaCompleta[2])}

    taskNumber = 0
}