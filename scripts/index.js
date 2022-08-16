let nav = document.getElementById('nav-toggle');

let nav1 = document.getElementsByClassName('nav');

nav.addEventListener('click',(e) => {
    nav1[0].classList.toggle('nav-show');
})
let cuestionarios = document.getElementsByClassName('miniCuestionario');
let puntuacion1 = 0;
let puntuacion2 = 0;
let puntuacion3 = 0;
let puntuacion4 = 0;
let puntuacion5 = 0;

for (let i = 0; i<cuestionarios.length; i++){
    cuestionarios[i].addEventListener('click', (e) => {
        (e.target.value == "respCorrecta" && cuestionarios[0]) ? puntuacion1 = 1 : puntuacion1 = 0;
        (e.target.value == "respCorrecta" && cuestionarios[1]) ? puntuacion2 = 1 : puntuacion2 = 0;
        (e.target.value == "respCorrecta" && cuestionarios[2]) ? puntuacion3 = 1 : puntuacion3 = 0;
        (e.target.value == "respCorrecta" && cuestionarios[3]) ? puntuacion4 = 1 : puntuacion4 = 0;
        (e.target.value == "respCorrecta" && cuestionarios[4]) ? puntuacion5 = 1 : puntuacion5 = 0;
    })
}