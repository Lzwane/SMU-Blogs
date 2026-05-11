document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Successfully Joined the SMU Sports Team. Thank You!!');
    this.reset(); // Reset the form fields
});