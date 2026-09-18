

let profileData =

JSON.parse(localStorage.getItem("profileData")) || {


    name: "User Name",

    email: "user@email.com",

    phone: "",

    userId: "USER-001",

    emergencyRole: "User"


};

// HTML Elements


const profileForm =
document.getElementById("profileForm");


const fullName =
document.getElementById("fullName");


const email =
document.getElementById("email");


const phone =
document.getElementById("phone");


const userId =
document.getElementById("userId");


const emergencyRole =
document.getElementById("emergencyRole");


const displayName =
document.getElementById("displayName");


const displayEmail =
document.getElementById("displayEmail");

// ===============================
// Load Profile
// ===============================

function loadProfile(){


    fullName.value =
    profileData.name;



    email.value =
    profileData.email;



    phone.value =
    profileData.phone;



    userId.value =
    profileData.userId;



    emergencyRole.value =
    profileData.emergencyRole;




    displayName.innerText =
    profileData.name;



    displayEmail.innerText =
    profileData.email;


}








// ===============================
// Save Profile
// ===============================


profileForm.addEventListener(
"submit",
function(e){


    e.preventDefault();




    profileData = {


        name:
        fullName.value,


        email:
        email.value,


        phone:
        phone.value,


        userId:
        userId.value,


        emergencyRole:
        emergencyRole.value,


        updatedAt:
        new Date().toLocaleString()


    };

    // Temporary Local Save

    localStorage.setItem(

        "profileData",

        JSON.stringify(profileData)

    );

    // Firebase Ready Function

    saveProfileToFirebase(profileData);


    loadProfile();

    alert(
        "Profile Updated Successfully!"
    );
});

// ===============================
// Firebase Save Function
// ===============================


// Nikhil will connect Firestore here

async function saveProfileToFirebase(data){


    console.log(

        "Firebase Profile Save Ready:",

        data

    );


}
// ===============================
// Firebase Fetch Function
// ===============================


async function getProfileFromFirebase(){


    console.log(

        "Firebase Profile Fetch Ready"

    );


}

// Page Load

loadProfile();
