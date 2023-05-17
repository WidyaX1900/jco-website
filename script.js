const hamburger = document.getElementById('hamburger');
const hamburgerIcon = hamburger.getElementsByTagName('div');
const menu = document.getElementsByClassName('menu-list')[0];

hamburger.addEventListener("click", event => {
   for (let i = 0; i < hamburgerIcon.length; i++) {
    
        hamburgerIcon[i].classList.toggle('icon-' + (i + 1));
   }
   
   menu.classList.toggle('slider');
});