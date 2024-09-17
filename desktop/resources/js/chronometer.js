let startTime;
let updatedTime;
let difference;
let timerID;
let running = false;
let marks = 0;
let lastDiference = 0;
let lastTime = 0;

function startChronometer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerID = setInterval(updateChronometer, 10);
        running = true;
        document.querySelector('#chronometer-play img').src = './resources/img/pauseIcone.png';
    }
    else {
        stopChronometer();
        document.querySelector('#chronometer-play img').src = './resources/img/playIcone.png';
    }
}

function stopChronometer() {
    if (running) {
        clearInterval(timerID);
        running = false;
    }
}

function resetChronometer() {
    clearInterval(timerID);
    difference = 0;
    running = false;
    document.getElementById('chronometer-counter').innerText = "00:00:00,00";
    document.querySelector('#chronometer-play img').src = './resources/img/playIcone.png';
    document.getElementById('chronometer-times').innerHTML = '';
    marks = 0;
}

function addMark() {  
    if (running) {

        marks++;

        let times = document.getElementById('chronometer-times');
    
        let tr = document.createElement('tr');
    
        let td1 = document.createElement('td');
        td1.textContent = marks;

        let td2 = document.createElement('td');
        if(marks == 1) td2.textContent = formatTime(0);
        else  {
            td2.innerHTML = formatTime(updatedTime - lastTime);

            if (lastDiference > updatedTime - lastTime) {
                td2.innerHTML += '<img src="./resources/img/upIcone.png" width="14px" height="auto">';
            } else {
                td2.innerHTML += '<img src="./resources/img/downIcone.png" width="14px" height="auto">';
            }            

            lastDiference = updatedTime-lastTime;
        }
    
        let td3 = document.createElement('td');
        td3.textContent = formatTime(difference);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        times.appendChild(tr);

        lastTime = updatedTime;
    }
}

function updateChronometer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    document.getElementById('chronometer-counter').innerText = formatTime(difference);
}

function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / (1000 * 60 * 60));
    let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    let centiseconds = Math.floor((milliseconds % 1000) / 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    centiseconds = centiseconds < 10 ? "0" + centiseconds : centiseconds;

    return `${hours}:${minutes}:${seconds},${centiseconds}`;
}