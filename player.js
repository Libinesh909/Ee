function updateTimer() {
    var storedTime = localStorage.getItem("tournamentTime");
    if (storedTime) {
        var countDownDate = new Date(storedTime).getTime();
        setInterval(() => {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            if (distance > 0) {
                var hours = Math.floor(distance / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                document.getElementById("timer").innerText = hours + "h " + minutes + "m";
            } else {
                document.getElementById("timer").innerText = "Tournament Started!";
            }
        }, 1000);
    }
}
updateTimer();

function registerPlayer() {
    var slot = Math.floor(Math.random() * 48) + 1;
    document.getElementById("slotNumber").innerText = slot;
    alert("Registered! Your slot is " + slot);
}
function loadLeaderboard() {
    var data = localStorage.getItem("leaderboardData");
    if (data) {
        document.getElementById("leaderboard").innerText = data;
    }
}
loadLeaderboard();
