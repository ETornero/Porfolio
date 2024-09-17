function updateTime() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    timeElement.textContent = timeString;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateElement.textContent = dateString;
}

setInterval(updateTime, 1000);
updateTime();