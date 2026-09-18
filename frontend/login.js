document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (pass !== confirm) {
        alert("Password doesn't match");
        return;
    }

    // User ka full name lo
    let fullName = document.getElementById("name").value.trim();

    // Sirf first name nikalo
    let firstName = fullName.split(" ")[0];

    // Local Storage me save karo
    localStorage.setItem("guardianName", firstName);

    // Dashboard par jao
    window.location.href = "dashboard.html";

});
