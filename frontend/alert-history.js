// ======================================
// Sentinel X - Alert History
// ======================================

let alerts = JSON.parse(localStorage.getItem("alertHistory")) || [];

// Elements
const alertTableBody = document.getElementById("alertTableBody");
const emptyAlerts = document.getElementById("emptyAlerts");

const totalAlerts = document.getElementById("totalAlerts");
const resolvedAlerts = document.getElementById("resolvedAlerts");

const activeAlerts = document.getElementById("activeAlerts");
const alertCount = document.getElementById("alertCount");

const searchInput = document.getElementById("searchAlert");

// ======================================
// Load Alerts
// ======================================

function loadAlerts() {

    alertTableBody.innerHTML = "";

    if (alerts.length === 0) {

        emptyAlerts.style.display = "block";

        document.querySelector("table").style.display = "none";

        updateStats();

        return;
    }

    emptyAlerts.style.display = "none";

    document.querySelector("table").style.display = "table";

    alerts.forEach((alert, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${alert.id}</td>

            <td>${alert.date}</td>

            <td>${alert.type}</td>

            <td>
                <span class="status-${alert.status.toLowerCase()}">
                    ${alert.status}
                </span>
            </td>

            <td>${alert.location}</td>

            <td>

                <button
                    class="action-btn view-btn"
                    onclick="viewAlert(${index})">

                    <i class="fas fa-eye"></i>

                </button>

                <button
                    class="action-btn delete-btn"
                    onclick="deleteAlert(${index})">

                    <i class="fas fa-trash"></i>

                </button>

            </td>

        `;

        alertTableBody.appendChild(row);

    });

    updateStats();

}

// ======================================
// Statistics
// ======================================

function updateStats() {

    totalAlerts.textContent = alerts.length;

    const resolved = alerts.filter(a => a.status === "Resolved").length;

    const active = alerts.filter(a => a.status === "Active").length;

    resolvedAlerts.textContent = resolved;

    activeAlerts.textContent = active;

    alertCount.textContent = alerts.length + " Alerts";

}

// ======================================
// View Alert
// ======================================

window.viewAlert = function(index){

    const alertData = alerts[index];

    alert(

`Alert ID : ${alertData.id}

Type : ${alertData.type}

Status : ${alertData.status}

Date : ${alertData.date}

Location : ${alertData.location}`

);

};

// ======================================
// Delete Alert
// ======================================

window.deleteAlert = function(index){

    if(confirm("Delete this alert?")){

        alerts.splice(index,1);

        localStorage.setItem(

            "alertHistory",

            JSON.stringify(alerts)

        );

        loadAlerts();

    }

};

// ======================================
// Search
// ======================================

searchInput.addEventListener("keyup",function(){

    const value=this.value.toLowerCase();

    const rows=document.querySelectorAll("#alertTableBody tr");

    rows.forEach(row=>{

        row.style.display=row.innerText
        .toLowerCase()
        .includes(value)

        ? ""

        : "none";

    });

});

// ======================================
// Demo Data
// Remove this when Firebase is connected
// ======================================

if(alerts.length===0){

    alerts=[

        {

            id:"ALT001",

            date:"28 Jul 2026 10:15 AM",

            type:"Manual SOS",

            status:"Resolved",

            location:"Satna, MP"

        },

        {

            id:"ALT002",

            date:"27 Jul 2026 08:42 PM",

            type:"Fall Detection",

            status:"Active",

            location:"AKS University"

        }

    ];

    localStorage.setItem(

        "alertHistory",

        JSON.stringify(alerts)

    );

}

loadAlerts();


