// =======================================
// Sentinel X - Emergency Contacts JS
// =======================================

// Contact Storage
let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];


// HTML Elements

const contactForm = document.getElementById("contactForm");
const contactsTableBody = document.getElementById("contactsTableBody");
const totalContacts = document.getElementById("totalContacts");
const primaryContacts = document.getElementById("primaryContacts");
const availableContacts = document.getElementById("availableContacts");




// ===============================
// Display Contacts
// ===============================

function displayContacts(){

    contactsTableBody.innerHTML = "";


    if(contacts.length === 0){

        document.getElementById("emptyContacts").style.display = "block";

    }
    else{

        document.getElementById("emptyContacts").style.display = "none";


        contacts.forEach((contact,index)=>{


            let row = document.createElement("tr");


            row.innerHTML = `

                <td>${contact.name}</td>

                <td>${contact.relationship}</td>

                <td>${contact.phone}</td>

                <td>${contact.email || "-"}</td>

                <td>

                    <button 
                    class="btn btn-danger btn-sm"
                    onclick="deleteContact(${index})">

                    <i class="fas fa-trash"></i>

                    </button>

                </td>

            `;


            contactsTableBody.appendChild(row);


        });

    }


    updateStats();

}





// ===============================
// Add Contact
// ===============================

contactForm.addEventListener("submit",function(e){

    e.preventDefault();



    let contact = {

        name:
        document.getElementById("contactName").value,


        relationship:
        document.getElementById("relationship").value,


        phone:
        document.getElementById("phone").value,


        email:
        document.getElementById("email").value,


    };



    contacts.push(contact);



    localStorage.setItem(
        "emergencyContacts",
        JSON.stringify(contacts)
    );



    displayContacts();


    contactForm.reset();



    alert(
        "Emergency Contact Added Successfully!"
    );


});







// ===============================
// Delete Contact
// ===============================

function deleteContact(index){


    contacts.splice(index,1);



    localStorage.setItem(
        "emergencyContacts",
        JSON.stringify(contacts)
    );



    displayContacts();



    alert(
        "Contact Deleted"
    );


}






// ===============================
// Search Contact
// ===============================

document
.getElementById("searchContact")
.addEventListener("keyup",function(){


    let value =
    this.value.toLowerCase();



    let rows =
    document.querySelectorAll(
        "#contactsTableBody tr"
    );



    rows.forEach(row=>{


        row.style.display =
        row.innerText
        .toLowerCase()
        .includes(value)
        ?
        ""
        :
        "none";


    });


});






// ===============================
// Statistics
// ===============================

function updateStats(){


    if(totalContacts){

        totalContacts.innerText =
        contacts.length;

    }



    if(primaryContacts){

        primaryContacts.innerText =
        contacts.length > 0 ? 1 : 0;

    }



    if(availableContacts){

        availableContacts.innerText =
        contacts.length;

    }


}






// ===============================
// Firebase Ready Functions
// (Nikhil will connect here)
// ===============================


async function saveContactToFirebase(contact){

    console.log(
        "Firebase Save Ready",
        contact
    );

}



async function getContactsFromFirebase(){

    console.log(
        "Firebase Fetch Ready"
    );

}



async function deleteContactFromFirebase(id){

    console.log(
        "Firebase Delete Ready",
        id
    );

}






// Page Load

displayContacts();
