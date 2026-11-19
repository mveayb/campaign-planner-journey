const monthArr = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

const grid = document.querySelector("div.calendar-grid");
const monthYear = document.querySelector("h1");

// let statt const, weil sich diese Werte beim Klicken ändern
let currentYear = 2026;
let currentMonth = 10; // 10 = November

function renderCalendar(year, month) {
    // altes Grid leeren, bevor neue Kästchen kommen
    grid.innerHTML = "";

    const monthName = monthArr[month];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const emptyDays = (firstDay + 6) % 7;

    monthYear.textContent = `${monthName} ${year}`;

    for (let i = 1; i <= emptyDays; i++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        grid.appendChild(dayElement);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.textContent = i;
        grid.appendChild(dayElement);
    }
}

document.querySelector("#prev-month").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
});

document.querySelector("#next-month").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
});

renderCalendar(currentYear, currentMonth);