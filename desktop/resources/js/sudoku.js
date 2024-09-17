let sudokuBoard = null;
let sudokuCells = Array.from({ length: 9 }, () => Array(9).fill(null));
let selectedCell = null;

function isValid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] == num || board[x][col] == num || 
            board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] == num) {
            return false;
        }
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] == 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) {
                            return true;
                        } else {
                            board[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function generateSudokuBoard() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    solveSudoku(board);
    return board;
}

function removeNumbers(board, clues) {
    let attempts = 0;
    while (attempts < (81 - clues)) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        while (board[row][col] === 0) {
            row = Math.floor(Math.random() * 9);
            col = Math.floor(Math.random() * 9);
        }
        let backup = board[row][col];
        board[row][col] = 0;

        let boardCopy = board.map(arr => arr.slice());
        if (!solveSudoku(boardCopy)) {
            board[row][col] = backup;
            attempts--;
        }
        attempts++;
    }
}

function createSudokuPuzzle(clues = 30) {
    let board = generateSudokuBoard();
    removeNumbers(board, clues);
    return board;
}

function createSudokuBoard() {
    sudokuBoard.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        sudokuCells[i] = [];
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("div");
            cell.classList.add("sudoku-cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", handleCellClick);
            sudokuBoard.appendChild(cell);
            sudokuCells[i][j] = cell;
        }
    }
}

function handleCellClick(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (!cell.classList.contains("predefined")) {
        if (selectedCell) {
            selectedCell.classList.remove("selected");
        }
        cell.classList.add("selected");
        selectedCell = cell;
    }
}

function handleKeyPress(event) {
    if (selectedCell) {
        const row = parseInt(selectedCell.dataset.row);
        const col = parseInt(selectedCell.dataset.col);
        const num = parseInt(event.key);

        if (num >= 1 && num <= 9) {
            if (isValidCellEntry(row, col, num)) {
                selectedCell.textContent = num;
                selectedCell.classList.remove("incorrect");
                selectedCell.classList.add("user-input", "correct");
            } else {
                selectedCell.classList.add("incorrect");
            }
        }
    }
}

function isValidCellEntry(row, col, num) {
    const board = sudokuCells.map(row => row.map(cell => parseInt(cell.textContent) || 0));
    return isValid(board, row, col, num);
}

function restartSudoku() {
    const puzzle = createSudokuPuzzle();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            sudokuCells[i][j].classList.remove("user-input", "correct", "incorrect", "selected");

            if (puzzle[i][j] === 0) {
                sudokuCells[i][j].textContent = '';
            } else {
                sudokuCells[i][j].textContent = puzzle[i][j];
                if (puzzle[i][j] !== 0) {
                    sudokuCells[i][j].classList.add("predefined");
                }
            }
        }
    }

    if (selectedCell) {
        selectedCell.classList.remove("selected");
        selectedCell = null;
    }
}



document.getElementById('sudoku-button').addEventListener('click', () => {
    sudokuBoard = document.getElementById("sudoku-board");
    createSudokuBoard();

    const puzzle = createSudokuPuzzle();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (puzzle[i][j] !== 0) {
                sudokuCells[i][j].textContent = puzzle[i][j];
                sudokuCells[i][j].classList.add("predefined");
            }
        }
    }
});

document.addEventListener('keydown', handleKeyPress);