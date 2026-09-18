
// Logout Button

const logoutBtn = document.getElementById("logoutBtn");



logoutBtn.addEventListener(
"click",
function(){


    // Clear Local Data

    localStorage.removeItem("profileData");

    localStorage.removeItem("deviceSettings");

    localStorage.removeItem("deviceData");

    localStorage.removeItem("emergencyContacts");



    // Firebase Logout Ready

    logoutFromFirebase();



    alert(
        "Logged out successfully!"
    );


    // Redirect to Login Page

    window.location.href = "index.html";


});

// =======================================
// Firebase Logout Function
// =======================================

async function logoutFromFirebase(){


    console.log(
        "Firebase Logout Ready"
    );



}
