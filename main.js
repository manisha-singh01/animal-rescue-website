// Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            document.getElementById("location").value =
                pos.coords.latitude + ", " + pos.coords.longitude;
        });
    } else {
        alert("Location not supported");
    }
}

// Form submit
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;

    document.getElementById("msg").innerText =
        "Registration Successful, " + username;
});