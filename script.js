// This script toggles the navigation links when the hamburger menu is clicked
// Wait until the page is fully loaded
window.onload = function() {
  // Get the menu icon and nav links
  var menuIcon = document.querySelector('.menu-icon');
  var navLinks = document.querySelector('.nav-links');

  // Add a click event to the menu icon
  menuIcon.onclick = function() {
    // Toggle the 'active' class on nav links
    navLinks.classList.toggle('active');
  };
};
