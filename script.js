// Modal Control Functions
function openForm() {
    document.getElementById("requestForm").style.display = "block";
}

function closeForm() {
    document.getElementById("requestForm").style.display = "none";
}

function openResourceModal() {
    document.getElementById("resourceModal").style.display = "block";
}

function closeResourceModal() {
    document.getElementById("resourceModal").style.display = "none";
}

// WhatsApp Form Handler
document.getElementById("supportForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("studentName").value;
    const sNum = document.getElementById("studentNumber").value;
    const school = document.getElementById("studentSchool").value;
    const type = document.getElementById("requestType").value;
    
    const phone = "27632337775"; 
    const message = `Hello CUTL, my name is ${name} (${sNum}) from the School of ${school}. I would like to request a ${type} to help me navigate my studies and student life.`;
    
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    closeForm();
});

// Close when clicking outside
window.onclick = function(event) {
    if (event.target.className === "form-overlay") {
        closeForm();
        closeResourceModal();
    }
}