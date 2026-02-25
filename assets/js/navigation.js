let hamburgerButton = document.getElementById('hamburgerButton');
let mobileNavLinks = document.getElementById('mobileNavLinks');
let navLinks = document.querySelectorAll('#mobileNavLinks a');

hamburgerButton.addEventListener('click', function(event) {
    mobileNavLinks.classList.toggle('open');
})

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileNavLinks.classList.remove('open');
    });
});