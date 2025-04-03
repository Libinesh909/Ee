// Admin sets the countdown timer (Modify this in Admin Panel)
let tournamentTime = localStorage.getItem("tournamentTime") || 600; // Default 10 minutes
let countdownDisplay = document.getElementById("countdown");

function startCountdown() {
    let timer = setInterval(function() {
        let minutes = Math.floor(tournamentTime / 60);
        let seconds = tournamentTime % 60;
        countdownDisplay.textContent = `${minutes}m ${seconds}s`;

        if (tournamentTime <= 0) {
            clearInterval(timer);
            countdownDisplay.textContent = "Tournament Started!";
        } else {
            tournamentTime--;
            localStorage.setItem("tournamentTime", tournamentTime);
        }
    }, 1000);
}

startCountdown();
