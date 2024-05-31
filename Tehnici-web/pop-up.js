document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
  });
  
  function toggleMenu(event) {
    var menu = document.querySelector('.popup-menu');
    menu.classList.toggle('show-menu');
    event.stopPropagation();
  }  