let contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('errorMessage');
    let successMessage = document.getElementById('successMessage');


    if (fullName.trim() == "" || emailAddress.trim() == "" || message.trim() == "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please complete all fields."

        return;
    }
    else {
        let formData = new FormData(contactForm);
        fetch('https://formspree.io/f/xvzbdzpg', {
            method: 'POST',
            body: formData,
            headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            // show success message and reset form here
            errorMessage.style.display = "none";
            successMessage.style.display = "block";
            successMessage.textContent= "Thank you for your submission. You will be contacted within 2-3 business days."
            contactForm.reset();
        } else {
            // show error message here
            errorMessage.style.display = "block";
            errorMessage.textContent = "Something went wrong, please try again."
        }
    })

        
    }
})