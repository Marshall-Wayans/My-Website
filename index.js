  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('show');
  }); 