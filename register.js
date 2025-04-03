document.getElementById("registerBtn").addEventListener("click", function() {
    let name = document.getElementById("playerName").value.trim();
    let email = document.getElementById("playerEmail").value.trim();
    let uid = document.getElementById("playerUID").value.trim();

    if (name === "" || email === "" || uid === "") {
        alert("Please fill in all details before registering!");
        return;
    }

    if (localStorage.getItem(uid)) {
        alert("You are already registered! Redirecting to Tournament Page.");
        window.location.href = "tournament.html";
        return;
    }

    // Simulated UPI payment verification (actual verification requires API)
    let isPaid = confirm("Have you completed the payment to UPI 9514159632@fam?");
    if (!isPaid) return;

    // Get an available slot
    let slot = getAvailableSlot();
    if (slot === -1) {
        alert("All slots are full!");
        return;
    }

    localStorage.setItem(uid, slot);
    alert("Successfully registered! Your slot number is: " + slot);
    window.location.href = "tournament.html";
});

function getAvailableSlot() {
    let maxSlots = 48;
    let takenSlots = Object.values(localStorage);

    for (let i = 1; i <= maxSlots; i++) {
        if (!takenSlots.includes(i.toString())) {
            return i;
        }
    }
    return -1; // No slots available
}
