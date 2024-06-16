// getDates.js
window.onload = function() {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;
};
