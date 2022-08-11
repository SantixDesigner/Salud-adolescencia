let nav = document.getElementById('nav-toggle');

let nav1 = document.getElementsByClassName('nav');

nav.addEventListener('click',(e) => {
    nav1[0].classList.toggle('nav-show');
})
