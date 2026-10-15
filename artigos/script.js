const mobileBtn = document.querySelector('.btn');
const navLinks = document.getElementById ('links');
const icon = document.querySelector('.btn i');

mobileBtn.addEventListener('click', () => {
navLinks.classList.toggle('show');
icon.classList.toggle('fa-times');
icon.classList.toggle('fa-bars');
})

