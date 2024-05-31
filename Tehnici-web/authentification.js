// Function for authenticating the user
function authenticateUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Make an AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                window.location.href = "/Davide";
            } else {
                alert(response.message || "Login failed");
            }
        }
    };
    xhr.send(JSON.stringify({ username: username, password: password }));
}
