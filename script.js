const clock = document.getElementById("clock");
const dateElement = document.getElementById("date");
const greeting = document.getElementById("greeting");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const day = now.getDay();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    let message = "";
    if (hours < 12) {
        message = "☀️ Good Morning";
    }
    else if (hours < 17) {
        message = "🌤 Good Afternoon";
    }
    else if (hours < 20) {
        message = "🌇 Good Evening";
    }
    else {
        message = "🌙 Good Night";
    }
    greeting.textContent = message;

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    const formattedDate = date.toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;

    dateElement.textContent =
        `${days[day]}, ${formattedDate} ${months[month]} ${year}`;

}

updateClock();

setInterval(updateClock, 1000);