
// Dashboard Functions

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle Functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }

    // Sidebar Navigation Active State
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('logout-link')) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Search Box Functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    console.log('Searching for:', searchTerm);
                    // Add search functionality here
                }
            }
        });
    }

    // Notification Badge Animation
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            const badge = this.querySelector('.badge');
            if (badge) {
                badge.style.display = 'none';
            }
        });
    }

    // Handle Window Resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    });

    // =============================================
    // DATE AND TIME DISPLAY
    // =============================================
    function updateDateTime() {
        const now = new Date();
        const dateElement = document.getElementById('currentDate');
        const timeElement = document.getElementById('currentTime');

        if (dateElement && timeElement) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = now.toLocaleDateString('en-US', options);

            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
        }
    }

    // Update date and time immediately and then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // =============================================
    // SOS BUTTON FUNCTIONALITY
    // =============================================
    const sosButton = document.getElementById('sosButton');
    const countdownContainer = document.getElementById('countdownContainer');
    const countdownTimer = document.getElementById('countdownTimer');
    const cancelSosBtn = document.getElementById('cancelSosBtn');
    const emergencyStatus = document.getElementById('emergencyStatus');

    let countdownInterval = null;
    let countdownValue = 10;

    if (sosButton) {
        sosButton.addEventListener('click', function() {
            // Start countdown
            countdownValue = 10;
            countdownTimer.textContent = countdownValue;

            // Show countdown and cancel button
            sosButton.style.display = 'none';
            countdownContainer.style.display = 'block';
            cancelSosBtn.style.display = 'block';

            // Start countdown timer
            countdownInterval = setInterval(function() {
                countdownValue--;
                countdownTimer.textContent = countdownValue;

                if (countdownValue <= 0) {
                    // SOS triggered
                    clearInterval(countdownInterval);
                    countdownContainer.style.display = 'none';
                    cancelSosBtn.style.display = 'none';
                    sosButton.style.display = 'flex';

                    // Update emergency status
                    if (emergencyStatus) {
                        emergencyStatus.textContent = 'EMERGENCY';
                        emergencyStatus.classList.remove('status-safe');
                        emergencyStatus.classList.add('status-danger');
                    }

                    // Show alert (dummy)
                    alert('SOS Alert Triggered! Emergency contacts will be notified.');
                }
            }, 1000);
        });
    }

    if (cancelSosBtn) {
        cancelSosBtn.addEventListener('click', function() {
            // Cancel countdown
            clearInterval(countdownInterval);

            // Reset UI
            countdownContainer.style.display = 'none';
            cancelSosBtn.style.display = 'none';
            sosButton.style.display = 'flex';

            // Reset countdown value
            countdownValue = 10;
            countdownTimer.textContent = countdownValue;
        });
    }

    // =============================================
    // LOCATION FUNCTIONALITY
    // =============================================
    const getLocationBtn = document.getElementById('getLocationBtn');
    const saveLocationBtn = document.getElementById('saveLocationBtn');
    const manualLatitude = document.getElementById('manualLatitude');
    const manualLongitude = document.getElementById('manualLongitude');
    const currentLatitude = document.getElementById('currentLatitude');
    const currentLongitude = document.getElementById('currentLongitude');
    const currentAddress = document.getElementById('currentAddress');

    if (getLocationBtn) {
        getLocationBtn.addEventListener('click', function() {
            // Dummy location data
            const dummyLat = (Math.random() * 180 - 90).toFixed(4);
            const dummyLng = (Math.random() * 360 - 180).toFixed(4);

            if (currentLatitude) {
                currentLatitude.textContent = dummyLat;
            }
            if (currentLongitude) {
                currentLongitude.textContent = dummyLng;
            }
            if (currentAddress) {
                currentAddress.textContent = 'Location Updated';
            }

            // Show feedback
            alert('Location updated successfully! (Dummy Data)');
        });
    }

    if (saveLocationBtn) {
        saveLocationBtn.addEventListener('click', function() {
            const lat = manualLatitude ? manualLatitude.value.trim() : '';
            const lng = manualLongitude ? manualLongitude.value.trim() : '';

            if (lat && lng) {
                if (currentLatitude) {
                    currentLatitude.textContent = lat;
                }
                if (currentLongitude) {
                    currentLongitude.textContent = lng;
                }
                if (currentAddress) {
                    currentAddress.textContent = 'Manual Location Saved';
                }

                // Clear inputs
                if (manualLatitude) manualLatitude.value = '';
                if (manualLongitude) manualLongitude.value = '';

                alert('Manual location saved successfully! (Dummy Data)');
            } else {
                alert('Please enter both latitude and longitude.');
            }
        });
    }

    // =============================================
    // EMERGENCY CONTACTS FUNCTIONALITY
    // =============================================
    const addContactBtn = document.getElementById('addContactBtn');
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    if (addContactBtn) {
        addContactBtn.addEventListener('click', function() {
            // Dummy add contact functionality
            alert('Add Contact modal would open here. (Dummy Functionality)');
        });
    }

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactItem = this.closest('.contact-item');
            const contactName = contactItem.querySelector('.contact-name').textContent;
            alert(`Edit contact: ${contactName} (Dummy Functionality)`);
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactItem = this.closest('.contact-item');
            const contactName = contactItem.querySelector('.contact-name').textContent;

            if (confirm(`Are you sure you want to delete ${contactName}? (Dummy Functionality)`)) {
                contactItem.style.display = 'none';
            }
        });
    });

    // =============================================
    // DEVICE SYNC FUNCTIONALITY
    // =============================================
    const syncDeviceBtn = document.getElementById('syncDeviceBtn');

    if (syncDeviceBtn) {
        syncDeviceBtn.addEventListener('click', function() {
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Syncing...';
            this.disabled = true;

            // Simulate sync process
            setTimeout(function() {
                syncDeviceBtn.innerHTML = originalText;
                syncDeviceBtn.disabled = false;
                alert('Device synced successfully! (Dummy Functionality)');
            }, 2000);
        });
    }

    // =============================================
    // ALERT HISTORY FUNCTIONALITY
    // =============================================

    // Sample Alert Data (dummy for now - Nikhil will replace this with Firebase data)
    let alertsData = [
        {
            id: 'SX1001',
            date: '2024-01-15',
            time: '14:32:45',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'SOS Button',
            status: 'Resolved',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1002',
            date: '2024-01-14',
            time: '09:15:22',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'Fall Detection',
            status: 'Resolved',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1003',
            date: '2024-01-13',
            time: '18:45:10',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'Manual Alert',
            status: 'Cancelled',
            contactNotified: 'No'
        },
        {
            id: 'SX1004',
            date: '2024-01-12',
            time: '11:20:33',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'SOS Button',
            status: 'Active',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1005',
            date: '2024-01-11',
            time: '16:55:18',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'Fall Detection',
            status: 'Resolved',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1006',
            date: '2024-01-10',
            time: '08:30:45',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'SOS Button',
            status: 'Resolved',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1007',
            date: '2024-01-09',
            time: '13:42:27',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'Manual Alert',
            status: 'Resolved',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1008',
            date: '2024-01-08',
            time: '20:15:50',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'SOS Button',
            status: 'Active',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1009',
            date: '2024-01-07',
            time: '10:05:12',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'Fall Detection',
            status: 'Resolved',
            contactNotified: 'Yes'
        },
        {
            id: 'SX1010',
            date: '2024-01-06',
            time: '15:28:39',
            userName: 'Priya Sharma',
            location: 'Prayagraj, Uttar Pradesh',
            latitude: '25.4358',
            longitude: '81.8463',
            alertType: 'Manual Alert',
            status: 'Cancelled',
            contactNotified: 'No'
        }
    ];

    // DOM Elements
    const alertsTableBody = document.getElementById('alertsTableBody');
    const alertSearchInput = document.getElementById('alertSearchInput');
    const statusFilter = document.getElementById('statusFilter');
    const typeFilter = document.getElementById('typeFilter');
    const dateFilter = document.getElementById('dateFilter');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const emptyState = document.getElementById('emptyState');

    // Only initialize the modal if the element actually exists on this page
    const alertDetailsModalEl = document.getElementById('alertDetailsModal');
    const alertDetailsModal = alertDetailsModalEl ? new bootstrap.Modal(alertDetailsModalEl) : null;

    // Statistics Elements
    const totalAlertsEl = document.getElementById('totalAlerts');
    const activeAlertsEl = document.getElementById('activeAlerts');
    const resolvedAlertsEl = document.getElementById('resolvedAlerts');
    const falseAlarmsEl = document.getElementById('falseAlarms');

    // Render Alerts Table
    function renderAlerts(alerts) {
        if (!alertsTableBody) return; // safety check - avoids crash if not on this page

        alertsTableBody.innerHTML = '';

        if (alerts.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';

        alerts.forEach(alert => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${alert.id}</strong></td>
                <td>${alert.date}</td>
                <td>${alert.time}</td>
                <td>${alert.userName}</td>
                <td>${alert.location}</td>
                <td>${alert.alertType}</td>
                <td><span class="status-badge status-${alert.status.toLowerCase()}">${alert.status}</span></td>
                <td>
                    <button class="btn-view" data-alert-id="${alert.id}">
                        <i class="fas fa-eye me-1"></i>View
                    </button>
                    <button class="btn-delete-alert" data-alert-id="${alert.id}">
                        <i class="fas fa-trash me-1"></i>Delete
                    </button>
                </td>
            `;
            alertsTableBody.appendChild(row);
        });

        // Add event listeners to View buttons
        document.querySelectorAll('.btn-view').forEach(btn => {
            btn.addEventListener('click', function() {
                const alertId = this.getAttribute('data-alert-id');
                showAlertDetails(alertId);
            });
        });

        // Add event listeners to Delete buttons
        // NOTE: renamed to btn-delete-alert to avoid clashing with the
        // Emergency Contacts .btn-delete buttons defined earlier in this file
        document.querySelectorAll('.btn-delete-alert').forEach(btn => {
            btn.addEventListener('click', function() {
                const alertId = this.getAttribute('data-alert-id');
                deleteAlert(alertId);
            });
        });
    }

    // Update Statistics
    function updateStatistics(alerts) {
        const total = alerts.length;
        const active = alerts.filter(a => a.status === 'Active').length;
        const resolved = alerts.filter(a => a.status === 'Resolved').length;
        const cancelled = alerts.filter(a => a.status === 'Cancelled').length;

        if (totalAlertsEl) totalAlertsEl.textContent = total;
        if (activeAlertsEl) activeAlertsEl.textContent = active;
        if (resolvedAlertsEl) resolvedAlertsEl.textContent = resolved;
        if (falseAlarmsEl) falseAlarmsEl.textContent = cancelled;
    }

    // Filter Alerts
    function filterAlerts() {
        const searchTerm = alertSearchInput ? alertSearchInput.value.toLowerCase() : '';
        const statusValue = statusFilter ? statusFilter.value : '';
        const typeValue = typeFilter ? typeFilter.value : '';
        const dateValue = dateFilter ? dateFilter.value : '';

        let filtered = alertsData.filter(alert => {
            const matchesSearch = alert.id.toLowerCase().includes(searchTerm) ||
                                 alert.userName.toLowerCase().includes(searchTerm) ||
                                 alert.location.toLowerCase().includes(searchTerm) ||
                                 alert.alertType.toLowerCase().includes(searchTerm);

            const matchesStatus = !statusValue || alert.status === statusValue;
            const matchesType = !typeValue || alert.alertType === typeValue;
            const matchesDate = !dateValue || alert.date === dateValue;

            return matchesSearch && matchesStatus && matchesType && matchesDate;
        });

        renderAlerts(filtered);
        updateStatistics(filtered);
    }

    // Show Alert Details Modal
    function showAlertDetails(alertId) {
        const alert = alertsData.find(a => a.id === alertId);

        if (alert && alertDetailsModal) {
            document.getElementById('modalAlertId').textContent = alert.id;
            document.getElementById('modalUserName').textContent = alert.userName;
            document.getElementById('modalDate').textContent = alert.date;
            document.getElementById('modalTime').textContent = alert.time;
            document.getElementById('modalLatitude').textContent = alert.latitude;
            document.getElementById('modalLongitude').textContent = alert.longitude;
            document.getElementById('modalAddress').textContent = alert.location;
            document.getElementById('modalTriggerType').textContent = alert.alertType;
            document.getElementById('modalContactNotified').textContent = alert.contactNotified;

            const statusBadge = document.querySelector('#modalStatus .status-badge');
            if (statusBadge) {
                statusBadge.className = `status-badge status-${alert.status.toLowerCase()}`;
                statusBadge.textContent = alert.status;
            }

            alertDetailsModal.show();
        }
    }

    // Delete an Alert (dummy - removes from local array & re-renders)
    // NOTE: this was completely missing before, which caused
    // "deleteAlert is not defined" errors when clicking Delete
    function deleteAlert(alertId) {
        if (confirm(`Are you sure you want to delete alert ${alertId}?`)) {
            alertsData = alertsData.filter(a => a.id !== alertId);
            filterAlerts(); // re-render with current filters applied
        }
    }

    // Wire up filter controls
    // NOTE: these listeners were also missing before - the filterAlerts()
    // function existed but nothing ever called it
    if (alertSearchInput) {
        alertSearchInput.addEventListener('keyup', filterAlerts);
    }
    if (statusFilter) {
        statusFilter.addEventListener('change', filterAlerts);
    }
    if (typeFilter) {
        typeFilter.addEventListener('change', filterAlerts);
    }
    if (dateFilter) {
        dateFilter.addEventListener('change', filterAlerts);
    }
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            if (alertSearchInput) alertSearchInput.value = '';
            if (statusFilter) statusFilter.value = '';
            if (typeFilter) typeFilter.value = '';
            if (dateFilter) dateFilter.value = '';
            filterAlerts();
        });
    }

    // Initial render on page load
    // NOTE: this call was missing before - the table was never populated
    // until a filter was manually triggered
    if (alertsTableBody) {
        renderAlerts(alertsData);
        updateStatistics(alertsData);
    }

});
