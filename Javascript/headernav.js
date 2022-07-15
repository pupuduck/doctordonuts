//on click//
const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')

// toggle //
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}) 


