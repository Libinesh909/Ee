function login() {
    var role = document.getElementById("role").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (role === "admin" && username === "admin" && password === "admin123") {
        window.location.href = "admin.html";
    } else if (role === "player") {
        window.location.href = "player.html";
    } else {
        alert("Invalid credentials!");
    }
}
