/*============================= toggle hamburger icon ===========================*/
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('uil-multiply');
  navbar.classList.toggle('active');
};

/*========= remove toggle icon and navbar when user click navbar link (scroll) =========*/
window.onscroll = () => {
  menuIcon.classList.remove('uil-multiply');
  navbar.classList.remove('active');
};