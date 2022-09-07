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

// console.log(1);

// window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependendel HTMLesten listos
//     console.log(2);
// });

// window.onload =function () {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function () { // solo espera el hmtl, pero no espera css ni imagenes
//     console.log(4);
// })

// console.log(5);

// window.onscroll = function (evento) {
//     console.log(evento);
// }

// // seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();


//     // validar formulario 
//     console.log('enviando formulario');
// });


//eventos de los input y los texarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // validar el formulario

    const {nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('todos los campos son obligatorios');
       
        return; // corta la ejecucion del codigo
    }
  
    // crear alerta de envio correcto
    mostrarMensaje('Mensaje enviado correctamente');
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;   
}
 
// muestra envio correcto
function mostrarMensaje (mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);

    // desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 2000)
}

//Muestra un erros en pantalla 
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 2000)
}




   