let nav = document.getElementById('nav-toggle');
let i = 0;
if (localStorage.getItem('login')) {
    i = localStorage.getItem('login');
}
let nav1 = document.getElementsByClassName('nav');
let p = document.getElementsByClassName('frases');
nav.addEventListener('click', (e) => {
    nav1[0].classList.toggle('nav-show');
})
let cuestionarios = document.getElementsByClassName('miniCuestionario');
let puntuacion1 = 0;
let puntuacion2 = 0;
let puntuacion3 = 0;
let puntuacion4 = 0;
let puntuacion5 = 0;
let puntuacionTotal = 0;
console.log(cuestionarios);

console.log(cuestionarios);
let button = document.getElementById('result');

console.log(puntuacion5);
let divResultado = document.getElementById('resultado');
let crearElement = document.createElement('div');

const funcion = () => {
    button.addEventListener('click', (e) => {
        if (puntuacionTotal == 0) {
            console.log(puntuacionTotal);
            crearElement.innerHTML = `
                <p> Sos un burro, ¿Cómo no vas a acertar ni uno?</p>`;
        }
        else if (puntuacionTotal == 1) {
            crearElement.innerHTML = `
                <p>Hdp, ¿Cómo vas a acertar uno solo?</p>`;
        }
        else if (puntuacionTotal == 2) {
            crearElement.innerHTML = `
                <p>Bueno...2 respuestas, estás en la B</p>`
        }
        else if (puntuacionTotal == 3) {
            crearElement.innerHTML = `
                <p>Bueno, poquito más de la mitad, estás bien...Por ahora </p>`
        }
        else if (puntuacionTotal == 4) {
            crearElement.innerHTML = `
                <p>Jaja, tonto, te faltó uno</p>`;
        }
        else if (puntuacionTotal == 5) {
            crearElement.innerHTML = `
                <p>Muy bien amigazo, te ganaste 10 pesitos (solo si fuiste el primero)</p>`;
        }
        divResultado.append(crearElement);
        button.remove();
        i++;
        localStorage.setItem('login', i);
        i > 1 && confirmCoso()
        for (let i = cuestionarios.length - 1; i > -1; i--) {
            console.log(i);
            cuestionarios[i].remove();
            p[i].remove();
        }
    })
}
const confirmCoso = () => {
    if (i > 1) {
        crearElement.innerHTML = `
        <p>Ya hiciste el cuestionario, no seas cara troll</p>`;
    }
}
const funcionPrin = () => {
    cuestionarios[0].addEventListener('click', (e) => {
        (e.target.value == "respCorrecta1") ? puntuacion1 = 1 : puntuacion1 = 0;
        puntuacionTotal = puntuacion1 + puntuacion2 + puntuacion3 + puntuacion4 + puntuacion5;
        sessionStorage.setItem('puntuacion', JSON.stringify(puntuacionTotal));
    })
    cuestionarios[1].addEventListener('click', e => {
        e.target.value == "respCorrecta2" ? puntuacion2 = 1 : puntuacion2 = 0;
        puntuacionTotal = puntuacion1 + puntuacion2 + puntuacion3 + puntuacion4 + puntuacion5;
        sessionStorage.setItem('puntuacion', JSON.stringify(puntuacionTotal));
    })
    cuestionarios[2].addEventListener('click', e => {
        e.target.value == "respCorrecta3" ? puntuacion3 = 1 : puntuacion3 = 0;
        puntuacionTotal = puntuacion1 + puntuacion2 + puntuacion3 + puntuacion4 + puntuacion5;
        sessionStorage.setItem('puntuacion', JSON.stringify(puntuacionTotal));
    })
    cuestionarios[3].addEventListener('click', e => {
        e.target.value == "respCorrecta4" ? puntuacion4 = 1 : puntuacion4 = 0;
        puntuacionTotal = puntuacion1 + puntuacion2 + puntuacion3 + puntuacion4 + puntuacion5;
        sessionStorage.setItem('puntuacion', JSON.stringify(puntuacionTotal));
    })
    cuestionarios[4].addEventListener('click', e => {
        e.target.value == "respCorrecta5" ? puntuacion5 = 1 : puntuacion5 = 0;
        puntuacionTotal = puntuacion1 + puntuacion2 + puntuacion3 + puntuacion4 + puntuacion5;
        sessionStorage.setItem('puntuacion', JSON.stringify(puntuacionTotal));
        console.log(puntuacion5);
    })
    console.log(puntuacionTotal);
    funcion();
}
if (sessionStorage.getItem('puntuacion')) {
    puntuacionTotal = sessionStorage.getItem('puntuacion');
    funcion();
    button.remove();
    for (let i = cuestionarios.length - 1; i > -1; i--) {
        console.log(i);
        cuestionarios[i].remove();
        p[i].remove();
    }
}
funcionPrin();
