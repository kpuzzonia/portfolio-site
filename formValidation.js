let contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let message = document.getElementById('message').value;

    if (fullName.trim() == "" || emailAddress.trim() == "" || message.trim() == "") {

    }
})