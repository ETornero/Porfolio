const apps = [
    {
        "id": "1",
        "title": "Settings",
        "type":"Tool",
        "dragbarItems": ['on', 'off', 'on'],
        "imgSrc": "./resources/img/settingsIcone.png",
        "imgAlt": "Aplications icone image",
        "imgTitle": "Aplications icone",
        "width": "auto",
        "height": "auto",
        "content": ` 
        <div class="settings-windows">
            <div class="settings-item">
                <p class="title">Select theme</p>
                <p class="sub-title">Select one for chenge the theme</p>
                <div class="slector">
                    <div class="selector-item selected" id="default-theme" onclick="changeTheme(0)"></div>
                    <div class="selector-item" id="dark-theme" onclick="changeTheme(1)"></div>
                    <div class="selector-item" id="pink-theme" onclick="changeTheme(2)"></div>
                </div>
            </div>
            <div class="settings-item">
                <p class="title">Background</p>
                <p class="sub-title">Select one image for chenge the Background</p>
                <div class="slector">
                    <div class="selector-item selected" id="background1" onclick="changeBackground(0)"></div>
                    <div class="selector-item" id="background2" onclick="changeBackground(1)"></div>
                    <div class="selector-item" id="background3" onclick="changeBackground(2)"></div>
                    <div class="selector-item" id="background4" onclick="changeBackground(3)"></div>
                </div>
            </div>
        </div>
        `
    },
    {
        "id": "2",
        "title": "Calculator",
        "type":"Tool",
        "dragbarItems": ['on', 'off', 'on'],
        "imgSrc": "./resources/img/calculatorIcone.png",
        "imgAlt": "Aplications icone image",
        "imgTitle": "Aplications icone",
        "width": "400px",
        "height": "auto",
        "content": ` 
        <div class="calculator-windows">
            <div class="screen" id="calculator-screen">

            </div>
            <div class="keyboard">
                <button onclick="appendToResult('(')">(</button>
                <button onclick="appendToResult(')')">)</button>
                <button onclick="appendToResult('%')">%</button>
                <button onclick="clearResult()">C</button>
                <button onclick="appendToResult('7')">7</button>
                <button onclick="appendToResult('8')">8</button>
                <button onclick="appendToResult('9')">9</button>
                <button onclick="appendToResult('/')">/</button>
                <button onclick="appendToResult('4')">4</button>
                <button onclick="appendToResult('5')">5</button>
                <button onclick="appendToResult('6')">6</button>
                <button onclick="appendToResult('x')">X</button>
                <button onclick="appendToResult('1')">1</button>
                <button onclick="appendToResult('2')">2</button>
                <button onclick="appendToResult('3')">3</button>
                <button onclick="appendToResult('-')">-</button>
                <button onclick="appendToResult('0')">0</button>
                <button onclick="appendToResult('.')">.</button>
                <button onclick="calculate()">=</button>
                <button onclick="appendToResult('+')">+</button>
            </div>
        </div>
        `
    },
    {
        "id": "3",
        "title": "Chronometeasdadsr",
        "type":"Tool",
        "dragbarItems": ['on', 'off', 'on'],
        "imgSrc": "./resources/img/chronometerIcone.png",
        "imgAlt": "Chronometer icone image",
        "imgTitle": "Chronometer icone",
        "width": "600px",
        "height": "auto",
        "content": ` 
        <div class="chronometer-windows">
            <p id="chronometer-counter" class="chronometer-counter">00:00:00,00</p>
            <div class="chronometer-buttons">
                <div id='chronometer-play' onclick="startChronometer()"><img src="./resources/img/playIcone.png" width="25px" height="25px"></div>
                <div onclick="addMark()"><img src="./resources/img/markIcone.png" width="25px" height="25px"></div>
                <div onclick="resetChronometer()"><img src="./resources/img/reloadIcone.png" width="25px" height="25px"></div>
            </div>
            <div class="chronometer-marks">
                <table class="header">
                    <thead>
                        <tr>
                            <th>Mark</th>
                            <th>Time</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                </table>
                <div class="times">
                    <table>
                        <tbody id="chronometer-times">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <script src="/resources/js/calendar.js"></script>        `
    },
    {
        "id": "4",
        "title": "Calendar",
        "type":"Tool",
        "dragbarItems": ['on', 'off', 'on'],
        "imgSrc": "./resources/img/calendarIcone.png",
        "imgAlt": "Calendar icone image",
        "imgTitle": "Calendar icone",
        "width": "600px",
        "height": "auto",
        "content": ` 
        <div class="calendar-windows" style="overflow: hidden;">
            <div class="calendar-header">
                <p class="calendar-title" id="calendar-title">September, 2020</p>
                <div class="calendar-buttons">
                    <div class="calendar-button" onclick="previousMonth()"><img src="./resources/img/leftArrow.png" width="16px" height="auto"></div>
                    <div class="calendar-button" onclick="nextMonth()"><img src="./resources/img/rightArrow.png" width="16px" height="auto"></div>                
                </div>
            </div>
            <table id="calendar">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>                        
                    </tr>
                </thead>
                <tbody id="calendar-body">
                </tbody>
            </table>
        </div>
        `
    },
    {
        "id": "5",
        "title": "Mines",
        "type":"Game",
        "dragbarItems": ['on', 'on', 'on'],
        "imgSrc": "./resources/img/minesIcone.png",
        "imgAlt": "Mines icone image",
        "imgTitle": "Mines icone",
        "width": "auto",
        "height": "auto",
        "content": ` 
        <div class="mines-windows">
            <div class="mines-options">
                <div class="option" onclick="openOptionsMenu()">Options</div>
                <div class="option" onclick="openDifficultMenu()">Difficult</div>
                <div class="option" onclick="createMinesBoard()">Restart</div>
                <div class="mines-timer" id="mines-timer">00:00</div>
            </div>
            <div id="mines-board" class="mines-board"></div>
            <div class="menu close" id="mines-options-menu">
                <div class="panel">
                    <p class="title">Options</p>
                    <label>
                        <p>Board size:</p>
                        <input id="board-size" name="board-size" type="number" min="4" max="24" value="10">
                    </label>
                    <label>
                        <p>Mines count:</p>
                        <input id="mines-count" name="mines-count" type="number" min="1" max="576" value="10">
                    </label>
                    <div class="buttons">
                        <div onclick="closeOptionsMenu()">Return</div>
                        <div onclick="changeSettings()">Save</div>
                    </div>
                </div>
            </div>
            <div class="menu close" id="mines-difficult-menu">
                <div class="panel">
                    <p class="title">Difficult</p>
                    <div class="buttons">
                        <div onclick="changeDifficult(1)">Easy</div>
                        <div onclick="changeDifficult(2)">Medium</div>
                        <div onclick="changeDifficult(3)">Hard</div>
                        <div onclick="closeDifficultMenu()">Return</div>
                    </div>
                </div>
            </div>
            <div class="menu close" id="mines-win-menu">
                <div class="panel">
                    <p class="title">You Win!</p>
                    <p id="difficult-result"></p>
                    <p id="time-result"></p>
                    <div style="display: flex; gap: 20px">
                        <p id="mines-result"></p>
                        <p id="size-result"></p>
                    </div>
                    <div class="buttons">
                        <div onclick="closeWinMenu()">Return</div>
                        <div onclick="closeWinMenu(); createMinesBoard();">Play</div>
                    </div>
                </div>
            </div>
        </div>
        `
    },
    /*{
        "id": "6",
        "title": "Sudoku",
        "type":"Game",
        "dragbarItems": ['on', 'on', 'on'],
        "imgSrc": "./resources/img/sudokuIcone.png",
        "imgAlt": "Sudoku icone image",
        "imgTitle": "Sudoku icone",
        "width": "550px",
        "height": "550px",
        "content": ` 
        <div class="sudoku-windows">
            <div class="sudoku-options">
                <div class="option" onclick="openDifficultMenu()">Difficult</div>
                <div class="option" onclick="restartSudoku()">Restart</div>
                <div class="sudoku-timer" id="sudoku-timer">00:00</div>
            </div>
            <div id="sudoku-board" class="sudoku-board">
                
            </div>
            <div class="menu close" id="sudoku-difficult-menu">

            </div>
            <div class="menu close" id="sudoku-win-menu">
                
            </div>
        </div>
        `
    },
    {
        "id": "7",
        "title": "Notes",
        "type":"Tool",
        "dragbarItems": ['on', 'on', 'on'],
        "imgSrc": "./resources/img/notesIcone.png",
        "imgAlt": "Notes icone image",
        "imgTitle": "Notes icone",
        "width": "600px",
        "height": "450px",
        "content": ` 
        <div class="notes-windows">
            <div class="notes-side-bar">
                <div class="notes-add-button" onclick="addNote();">Add note</div>
                <div class="notes-scroll" id="notes-scroll"></div>
            </div>
            <div class="notes-board">
                <input name="note-title" id="note-title" type="text" value="Title">
                <textarea name="note-text" id="note-text"></textarea>
                <div class="notes-save-button">Save</div>
            </div>
        </div>
        `
    }*/
];

let testapps = '';
apps.forEach((app, index) => {
    testapps += `<div class='app-item' onclick='instanceWindow(${index + 1})' id='${app.title.toLowerCase()}-button' data-name='${app.title}' data-type='${app.type}'><img src='${app.imgSrc}' width='48px' height='48px' alt='${app.imgAlt}' title='${app.imgTitle}'><p>${app.title}</p></div>`;
});

apps.unshift({
    "id": "0",
    "title": "Aplications",
    "dragbarItems": ['off', 'off', 'on'],
    "imgSrc": "./resources/img/aplicationsIcone.png",
    "imgAlt": "Aplications icone image",
    "imgTitle": "Aplications icone",
    "width": "",
    "height": "",
    "content": `
    <div class="apps-windows">
        <!--<div class="filter">
            <div class="filter-title">Order by :</div>
            <div class="filter-option" onclick="orderByName()">Name</div>
            <div class="filter-option" onclick="orderByType()">Type</div>
        </div>-->
        <div class="scroll">
            ${testapps}
        </div>
    </div>`
});

const windows = [];
let currentWindow = null;

function instanceWindow(index) {

    if(!document.getElementById(index)) {
        const newWindow = createWindowElement(apps[index]);
        newWindow.id = index;
        let toolbarItem = createToolbarItem(newWindow, apps[index]);
        toolbarItem.dataset.id = index;
    
        document.getElementById('toolbar').appendChild(toolbarItem);
    
        document.body.appendChild(newWindow);
    
        windows.push(newWindow);
        addWindowEvents(newWindow, toolbarItem);
        dragControls();
    }
    else {
        focusWindow(document.getElementById(index), document.querySelector(`[data-id="${index}"]`));
        toggleWindowState(document.getElementById(index), document.querySelector(`[data-id="${index}"]`));
    }
}

function createWindowElement(app) {
    const newWindow = document.createElement('div');
    newWindow.classList.add('windows', 'open', 'focus');
    newWindow.style.width = app.width;
    newWindow.style.height = app.height;

    const dragbar = document.createElement('div');
    dragbar.className = 'windows-dragbar';
    
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('dragbar-title');
    titleContainer.textContent = app.title;
    dragbar.appendChild(titleContainer);

    addDragbarButtons(dragbar, newWindow, app);
    newWindow.appendChild(dragbar);

    const windowsContent = document.createElement('div');
    windowsContent.innerHTML = app.content;
    windowsContent.style.height = '100%';
    newWindow.appendChild(windowsContent);

    return newWindow;
}

function createToolbarItem(newWindow, app) {
    const toolbarItem = document.createElement('div');
    toolbarItem.className = 'toolbar-item open focus';

    const itemImg = document.createElement('img');
    itemImg.src = app.imgSrc;
    itemImg.width = '32';
    itemImg.height = '32';
    itemImg.alt = app.iconAlt;
    itemImg.title = app.iconTitle;
    toolbarItem.appendChild(itemImg);

    toolbarItem.addEventListener('click', () => toggleWindowState(newWindow, toolbarItem));

    return toolbarItem;
}

function addDragbarButtons(dragbar, newWindow, app) {
    const buttonIcons = ['crossIcone.png', 'expandIcone.png', 'minusIcone.png'];
    const imgSizes = [11, 12, 13];
    let buttonsState = app.dragbarItems;

    buttonIcons.forEach((buttonSrc, index) => {
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'dragbar-button';
        if (buttonsState[index] == 'off') buttonDiv.style.display = 'none';
        const img = document.createElement('img');
        img.src = `./resources/img/${buttonSrc}`;
        img.width = imgSizes[index];
        buttonDiv.appendChild(img);

        buttonDiv.addEventListener('click', () => handleButtonClick(index, newWindow));
        dragbar.appendChild(buttonDiv);
    });
}

function handleButtonClick(index, newWindow) {
    switch (index) {
        case 0:
            closeWindow(newWindow);
            break;
        case 1:
            newWindow.classList.toggle('maximized');
            break;
        case 2:
            minimizeWindow(newWindow);
            break;
    }
}

function closeWindow(newWindow) {
    const toolbarItem = document.querySelector('.toolbar-item.focus');

    if(newWindow.id != 0) {
        windows.splice(windows.indexOf(newWindow), 1);
    
        newWindow.classList = 'windows close';
        toolbarItem.classList = 'toolbar-item close';
    
        setTimeout(() => {
            newWindow.remove();
            toolbarItem.remove();
        }, 300);
    }
    else {
        minimizeWindow(newWindow);
    }
}

function minimizeWindow(newWindow) {
    const toolbarItem = document.querySelector('.toolbar-item.focus');
    newWindow.classList.remove('open');
    newWindow.classList.add('minimized');
    toolbarItem.classList.remove('open', 'focus');
    toolbarItem.classList.add('minimized');
}

function toggleWindowState(newWindow, toolbarItem) {
    newWindow.classList.remove('minimized');
    newWindow.classList.add('open');

    windows.forEach(window => window.classList.remove('focus'));
    document.querySelectorAll('.toolbar-item').forEach(item => item.classList.remove('focus'));

    newWindow.classList.add('focus');
    toolbarItem.classList.add('focus');
    toolbarItem.classList.remove('minimized');
}

function addWindowEvents(newWindow, toolbarItem) {
    newWindow.addEventListener('mousedown', () => focusWindow(newWindow, toolbarItem));
}

function focusWindow(newWindow, toolbarItem) {
    windows.forEach(window => window.classList.remove('focus'));
    document.querySelectorAll('.toolbar-item').forEach(item => item.classList.remove('focus'));

    newWindow.classList.add('focus');
    toolbarItem.classList.add('focus');
}

function dragControls() {
    let offsetX, offsetY;

    const handleMouseDown = (event, targetWindow) => {
        offsetX = event.layerX;
        offsetY = event.layerY;
        currentWindow = targetWindow;
        windows.forEach(window => window.classList.remove('focus'));
        currentWindow.classList.add('focus');
    };

    const handleMouseMove = (event) => {
        if (currentWindow && !currentWindow.classList.contains('maximized')) {
            const minTop = 0 + (currentWindow.offsetHeight / 2);
            const maxTop = window.innerHeight + (currentWindow.offsetHeight / 2) - 50 - 33;
            const minLeft = 0 - (currentWindow.offsetWidth / 3);
            const maxLeft = window.innerWidth + (currentWindow.offsetWidth / 3);

            const isFirefox = typeof InstallTrigger !== 'undefined';
            let newLeft, newTop;

            if (isFirefox) {
                newLeft = event.clientX - offsetX + (currentWindow.offsetWidth / 2);
                newTop = event.clientY - offsetY + (currentWindow.offsetHeight / 2);
            } else {
                newLeft = event.clientX - offsetX;
                newTop = event.clientY - offsetY;
            }

            newTop = Math.max(minTop, Math.min(newTop, maxTop));
            newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));

            currentWindow.style.left = `${newLeft}px`;
            currentWindow.style.top = `${newTop}px`;
        }
    };

    windows.forEach(targetWindow => {
        const dragbar = targetWindow.querySelector('.windows-dragbar');
        dragbar.addEventListener('mousedown', (event) => handleMouseDown(event, targetWindow));
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => { currentWindow = null; });
}

function moveWindow(event) {
    const minTop = currentWindow.offsetHeight / 2;
    const maxTop = window.innerHeight - 50 - 33 + minTop;
    const minLeft = -(currentWindow.offsetWidth / 3);
    const maxLeft = window.innerWidth + (currentWindow.offsetWidth / 3);

    let newLeft = event.clientX - offsetX;
    let newTop = event.clientY - offsetY;

    newTop = Math.max(minTop, Math.min(newTop, maxTop));
    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));

    currentWindow.style.left = `${newLeft}px`;
    currentWindow.style.top = `${newTop}px`;
}

function orderByName() {
    var scroll = document.querySelector('.scroll');
    var items = Array.from(scroll.children);

    items.sort(function(a, b) {
        var nameA = a.getAttribute('data-name').toUpperCase();
        var nameB = b.getAttribute('data-name').toUpperCase();
        if (nameA < nameB) {
        return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
        return 0;
    });

    while (scroll.firstChild) {
        scroll.removeChild(scroll.firstChild);
    }

    items.forEach(function(item) {
        scroll.appendChild(item);
    });
}

function orderByType() {
    var scroll = document.querySelector('.scroll');
    var items = Array.from(scroll.children);

    items.sort(function(a, b) {
        var typeA = a.getAttribute('data-type').toUpperCase();
        var typeB = b.getAttribute('data-type').toUpperCase();
        if (typeA < typeB) {
        return -1;
        }
        if (typeA > typeB) {
        return 1;
        }
        return 0;
    });

    while (scroll.firstChild) {
        scroll.removeChild(scroll.firstChild);
    }

    items.forEach(function(item) {
        scroll.appendChild(item);
    });
}
  
instanceWindow(0);
minimizeWindow(document.getElementById(0));
