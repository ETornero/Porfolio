let calendarBody = null; 
let calendarTitle = null;
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function generateCalendar(month, year) {
    console.log('entra');
    calendarBody = document.getElementById("calendar-body");
    calendarTitle = document.getElementById("calendar-title");

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarBody.innerHTML = "";
    calendarTitle.textContent = getMonthName(month) + ", " + year; // Actualiza el título del calendario

    let date = 1;
    for (let i = 0; i < 6; i++) { // crea 6 filas
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) { // crea 7 celdas por fila
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("today");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }

        calendarBody.appendChild(row);
    }
}

function getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return monthNames[month];
}

function previousMonth() {
    console.log('prev');
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
}

function nextMonth() {

    console.log('next');
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
}

document.getElementById('calendar-button').addEventListener('click', () => {
    
    generateCalendar(currentMonth, currentYear);
});

