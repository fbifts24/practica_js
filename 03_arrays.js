// ARRAYS

// let array = new Array(5)

// array[0] = 'HTML'
// array[1] = 'CSS'
// array[2] = 'JS'

// console.log(array)

// let arrayNumeros = [3, 9, 8, 6, 4, 7, 5, 6, 8, 1]

// console.log(arrayNumeros)

// console.log(arrayNumeros.length)

// console.log(arrayNumeros.length -1)

// let temasFront = ['HTML', 'CSS', 'JS']
// let temasBack = ['HTML', 'CSS', 'JS']

// console.log("Son lo mismo? ", temasFront == temasBack)

// temasBack = temasFront

// console.log("Son lo mismo? ", temasFront == temasBack)

// let a = 3
// let b = 3
// console.log("Y estos? ", a == b)


// temasFront[temasFront.length] = 'ANGULAR'
// console.log(temasFront)

let frutas = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja', 'Banana', 'Pera', 'Tomate']

// FILTER
// Devuelve un nuevo array basado en el criterio definido

// let filter = frutas.filter((param) => {
//     return param === "Manzana"
// })

// console.log(filter)
// console.log(typeof filter)
// console.log(Array.isArray(filter))

const temas = [
    {tema: 'HTML', materia: 'Frontend'},
    {tema: 'CSS', materia: 'Frontend'},
    {tema: 'JS', materia: 'Frontend'},
    {tema: 'JS', materia: 'Backend'},
    {tema: 'NodeJS', materia: 'Backend'},
    {tema: 'MongoDB', materia: 'Backend'},
]

console.log(temas)

let temasFiltrados = temas.filter(param => param.materia == 'Backend')

console.log(temasFiltrados)





























