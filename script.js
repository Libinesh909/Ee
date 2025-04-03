document.getElementById("registerBtn").addEventListener("click", function() {
    let name = document.getElementById("playerName").value.trim();
    let email = document.getElementById("playerEmail").value.trim();
    let uid = document.getElementById("playerUID").value.trim();

    if (name === "" || email === "" || uid === "") {
        alert("Please fill in all details before registering!");
        return;
    }

    // Check if the player is already registered
    if (localStorage.getItem(uid)) {
        alert("You are already registered! Your slot number is: " + localStorage.getItem(uid));
        return;
    }

    // Get the available slot
    let slot = getAvailableSlot();
    if (slot === -1) {
        alert("All slots are full!");
        return;
    }

    // Assign slot and save in local storage
    localStorage.setItem(uid, slot);
    alert("Successfully registered! Your slot number is: " + slot);
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
