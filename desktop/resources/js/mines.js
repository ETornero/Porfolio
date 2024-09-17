let boardSize = 10;
let mineCount = 10;
let board = null;
let optionsMenu = null;
let difficultMenu = null;
let winMenu = null;
let timer = null;
let seconds = 0;
let difficult = 'Custom';
const cells = [];
let minePositions = [];
let runningGame = false;

function createMinesBoard() {
    stopTimer();
    runningGame = true;
    startTimer();
    board.innerHTML = '';
    board.classList.remove('win', 'lose');

    board.style.gridTemplateColumns = `repeat(${boardSize}, 30px)`;
    board.style.gridTemplateRows = `repeat(${boardSize}, 30px)`;

    minePositions = generateMines();
    for (let i = 0; i < boardSize; i++) {
        cells[i] = [];
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("mines-cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", handleClick);
            cell.addEventListener("auxclick", handleAuxClick);
            board.appendChild(cell);
            cells[i][j] = cell;
        }
    }
}

function generateMines() {
    const positions = [];
    while (positions.length < mineCount) {
        const position = Math.floor(Math.random() * boardSize * boardSize);
        if (!positions.includes(position)) {
            positions.push(position);
        }
    }
    return positions;
}

function handleClick(event) {
    if(runningGame) {
        const cell = event.target;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        if (minePositions.includes(row * boardSize + col)) {
            cell.textContent = "💣";
            board.classList.add('lose');
            revealBoard();
        } else {
            revealCell(row, col);
            if (checkWin()) {
                win();
            }
        }
    }
}

function handleAuxClick(event) {
    if (event.button === 1) {
        const cell = event.target;
        if (!cell.classList.contains("revealed")) {
            if (cell.textContent === "🚩") {
                cell.textContent = "";
                cell.classList.remove('flag');
            } else {
                cell.textContent = "🚩";
                cell.classList.add('flag');
            }
        }
        event.preventDefault();
    }
}

function revealBoard() {
    runningGame = false;
    stopTimer();
    cells.forEach((row, i) => {
        row.forEach((cell, j) => {
            cell.classList.add("revealed");
            if (minePositions.includes(i * boardSize + j)) {
                cell.textContent = "💣";
            } else {
                const mineCount = countAdjacentMines(i, j);
                if (mineCount > 0) {
                    cell.textContent = mineCount;
                }
            }
        });
    });
}

function revealCell(row, col) {
    const cell = cells[row][col];
    if (cell.classList.contains("revealed")) return;
    cell.classList.add("revealed");
    const mineCount = countAdjacentMines(row, col);
    if (mineCount > 0) {
        cell.textContent = mineCount;
    } else {
        cell.textContent = '';
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newRow = row + i;
                const newCol = col + j;
                if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
                    revealCell(newRow, newCol);
                }
            }
        }
    }
}

function countAdjacentMines(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
                if (minePositions.includes(newRow * boardSize + newCol)) {
                    count++;
                }
            }
        }
    }
    return count;
}

function checkWin() {
    let revealedCount = 0;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (cells[i][j].classList.contains("revealed")) {
                revealedCount++;
            }
        }
    }
    return revealedCount === boardSize * boardSize - mineCount;
}

function win(){
    board.classList.add('win');
    document.getElementById('difficult-result').textContent = "Difficult: "+difficult;
    document.getElementById('time-result').textContent = "Complete time: "+timer.textContent;
    document.getElementById('mines-result').textContent = "💣: "+mineCount;
    document.getElementById('size-result').textContent = "Size: "+boardSize+"x"+boardSize;
    revealBoard();
    openWinMenu();
}

function changeSettings(size, mines) {

    let newSize = document.getElementById('board-size').value;
    let newMines = document.getElementById('mines-count').value;

    if (size != null) {
        newSize = size ;
        newMines = mines;
    }
    else {
        difficult = 'Custom';
    }

    if (newSize > 24) {
        boardSize = 24;
    } 
    else if (newSize < 5) {
        boardSize = 5;
    }
    else {
        boardSize = newSize;
    }

    if (newMines >= boardSize * boardSize - 5) {

        mineCount = boardSize - 5;
    }
    else if(newMines <= 0) {
        mineCount = 1;
    }
    else {
        mineCount = newMines;
    }

    document.getElementById('5').style.left = '50%';
    document.getElementById('5').style.top = '50%';

    createMinesBoard();
    closeOptionsMenu();
}

function openOptionsMenu() {
    optionsMenu.classList.remove('close');
    optionsMenu.classList.add('open');
}

function closeOptionsMenu() {
    optionsMenu.classList.remove('open');
    optionsMenu.classList.add('close');
}

function openDifficultMenu() {
    difficultMenu.classList.remove('close');
    difficultMenu.classList.add('open');
}

function closeDifficultMenu() {
    difficultMenu.classList.remove('open');
    difficultMenu.classList.add('close');
}

function openWinMenu() {
    winMenu.classList.remove('close');
    winMenu.classList.add('open');
}

function closeWinMenu() {
    winMenu.classList.remove('open');
    winMenu.classList.add('close');
}

function formatTimeMines(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    timerInterval = setInterval(function() {
        seconds++;
        timer.textContent = formatTimeMines(seconds);
    }, 1000);
}

function stopTimer() {
    if(seconds > 0){
        clearInterval(timerInterval);
        seconds = 0;
        timer.textContent = formatTimeMines(seconds);
    }
}

function changeDifficult(level) {
    if(level == 1) {
        difficult = 'Easy';
        changeSettings(10, 15);
    }
    else if(level == 2) {
        difficult = 'Medium';
        changeSettings(20, 60);
    } 
    else {
        difficult = 'Hard';
        changeSettings(30, 225);
    }

    closeDifficultMenu();
}

document.getElementById('mines-button').addEventListener('click', () => {
    board = document.getElementById("mines-board");
    timer = document.getElementById('mines-timer');
    optionsMenu = document.getElementById('mines-options-menu');
    difficultMenu = document.getElementById('mines-difficult-menu');
    winMenu = document.getElementById('mines-win-menu');
    createMinesBoard();
});