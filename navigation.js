let hamburgerButton = document.getElementById('hamburgerButton');
let mobileNavLinks = document.getElementById('mobileNavLinks');

hamburgerButton.addEventListener('click', function(event) {
    mobileNavLinks.classList.toggle('open');
})