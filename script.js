// Календарь
const calendarGrid = document.getElementById('calendar-grid');
const daysInMonth = 30; // сентябрь
for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement('div');
    if(i === 25) dayDiv.classList.add('heart');
    dayDiv.textContent = i;
    calendarGrid.appendChild(dayDiv);
}

// Таймер обратного отсчета
const countdownDate = new Date('2025-09-25T00:00:00').getTime();
function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
setInterval(updateTimer, 1000);
updateTimer();

// Карта с рестораном
const map = L.map('map').setView([44.0421, 43.0690], 15); // координаты Пятигорск
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);
L.marker([44.0421, 43.0690]).addTo(map)
    .bindPopup('Ресторан «Пятигорский дача»')
    .openPopup();
