// querySelector
const heading = document.querySelector('.header__texto h2') //0 o 1 elemento
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add ('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');


// getElementById
// const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';


//agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';


// agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// agregar al documento
const navegacion = document.querySelector ('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

// eventos

console.log(1);

window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependendel HTMLesten listos
    console.log(2);
});

window.onload =function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () { // solo espera el hmtl, pero no espera css ni imagenes
    console.log(4);
})

console.log(5);

window.onscroll = function () {
    console.log('scrolling....');
}