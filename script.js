const hamburger = document.getElementById('hamburger');
const hamburgerIcon = hamburger.getElementsByTagName('div');

hamburger.addEventListener("click", event => {
   for (let i = 0; i < hamburgerIcon.length; i++) {
    
        hamburgerIcon[i].classList.toggle('icon-' + (i + 1));
   }       
});