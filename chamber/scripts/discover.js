document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.querySelector(".hamburger-button");
    const menu = document.querySelector(".nav");
    const darkModeButton = document.querySelector(".dark-mode-button");
  
    hamburgerButton.addEventListener("click", function() {
      menu.classList.toggle("show");
    });

  
    darkModeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
