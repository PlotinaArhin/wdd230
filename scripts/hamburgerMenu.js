// scripts/hamburgerMenu.js
document.getElementById('menu').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('active');
    document.getElementById('close-menu').classList.toggle('active');
    // document.getElementById('menu').classList.toggle('hidden');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('active');
    document.getElementById('close-menu').classList.toggle('active');
    document.getElementById('menu').classList.toggle('hidden');
});
