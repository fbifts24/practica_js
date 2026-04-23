import {html, css, javascript} from "./lenguajes.js"

// Obtener los onjetos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

console.log(enlaces)


// Agregar el addeventlistener a cada enlace
enlaces.forEach((enlace) => {
    enlace.addEventListener('click', () => {
        
        let contenido = obtenerInfo(enlace.textContent)

        console.log(contenido)

        // Quitar la clase 'activo' de los enlaces

        enlaces.forEach((enlace) => {
            enlace.classList.remove('activo')
        })

        // Agregar al clase "activo" al elemento clickeado

        enlace.classList.add('activo')

        // Obtener el contenido que corresponde segun elemento
        tituloElemento.innerHTML = contenido.titulo;
        
        subtituloElemento.innerHTML = contenido.subtitulo;

        parrafoElemento.innerHTML = contenido.parrafo

    })
})


function obtenerInfo(enlace) {
    let contenido = {
        "HTML": html,
        "CSS": css,
        "JAVASCRIPT": javascript
    }

    return contenido[enlace]
}