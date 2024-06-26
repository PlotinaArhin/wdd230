const hamburgerButton = document.querySelector('.hamburger-button');
const menu = document.querySelector('.menu');
const darkModeButton = document.querySelector('.dark-mode-button');
const mainArea = document.querySelector('main');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

darkModeButton.addEventListener('click', () => {
    mainArea.classList.toggle('dark-mode');
});
