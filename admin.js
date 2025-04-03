function setTimer() {
    var time = document.getElementById("tournamentTime").value;
    localStorage.setItem("tournamentTime", time);
    alert("Timer Set!");
}
function updateLeaderboard() {
    var data = document.getElementById("leaderboard").value;
    localStorage.setItem("leaderboardData", data);
    alert("Leaderboard Updated!");
}
function settlePayments() {
    alert("Payments Settled!");
}
