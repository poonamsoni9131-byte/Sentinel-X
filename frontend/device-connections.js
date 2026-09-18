// =======================================
// Sentinel X - Device Settings JS
// =======================================


// Default Settings Storage

let deviceSettings = 
JSON.parse(localStorage.getItem("deviceSettings")) || {

    deviceName: "Sentinel X Wearable",

    deviceId: "",

    deviceStatus: "Disconnected",

    autoSOS: false,

    fallDetection: false,

    sosTimer: 10,

    emergencyMessage:
    "I need help. This is an emergency alert.",

    alertSound: true

};





// HTML Elements

const deviceName =
document.getElementById("deviceName");

const deviceId =
document.getElementById("deviceId");

const deviceStatus =
document.getElementById("deviceStatus");

const autoSOS =
document.getElementById("autoSOS");

const fallDetection =
document.getElementById("fallDetection");

const sosTimer =
document.getElementById("sosTimer");

const emergencyMessage =
document.getElementById("emergencyMessage");

const alertSound =
document.getElementById("alertSound");

const saveButton =
document.getElementById("saveSettings");





// ===============================
// Load Settings
// ===============================

function loadSettings(){


    deviceName.value =
    deviceSettings.deviceName;


    deviceId.value =
    deviceSettings.deviceId || "Not Connected";


    deviceStatus.value =
    deviceSettings.deviceStatus;



    autoSOS.checked =
    deviceSettings.autoSOS;



    fallDetection.checked =
    deviceSettings.fallDetection;



    sosTimer.value =
    deviceSettings.sosTimer;



    emergencyMessage.value =
    deviceSettings.emergencyMessage;



    alertSound.checked =
    deviceSettings.alertSound;


}





// ===============================
// Save Settings
// ===============================

saveButton.addEventListener(
"click",
function(){



    deviceSettings = {


        deviceName:
        deviceName.value,


        deviceId:
        deviceId.value,


        deviceStatus:
        deviceStatus.value,


        autoSOS:
        autoSOS.checked,


        fallDetection:
        fallDetection.checked,


        sosTimer:
        sosTimer.value,


        emergencyMessage:
        emergencyMessage.value,


        alertSound:
        alertSound.checked


    };




    // Temporary Local Storage

    localStorage.setItem(

        "deviceSettings",

        JSON.stringify(deviceSettings)

    );




    // Firebase Function Ready

    saveSettingsToFirebase(deviceSettings);



    alert(
        "Device Settings Saved Successfully!"
    );


});







// ===============================
// Firebase Ready Function
// ===============================


// Nikhil will connect Firestore here

async function saveSettingsToFirebase(settings){


    console.log(
        "Firebase Save Ready:",
        settings
    );


    /*
    
    Example Firestore structure:

    users
      |
      userId
        |
        deviceSettings
              |
              autoSOS
              fallDetection
              sosTimer
              emergencyMessage

    */


}







// ===============================
// Firebase Fetch Function
// ===============================


async function getSettingsFromFirebase(){


    console.log(
        "Firebase Fetch Settings Ready"
    );


}






// Page Load

loadSettings();
