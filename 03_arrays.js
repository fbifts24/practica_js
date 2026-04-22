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

/* const temas = [
    { tema: 'HTML', materia: 'Frontend' },
    { tema: 'CSS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Backend' },
    { tema: 'NodeJS', materia: 'Backend' },
    { tema: 'MongoDB', materia: 'Backend' },
]

console.log(temas)

let temasFiltrados = temas.filter(param => param.materia == 'Backend')

console.log(temasFiltrados)
 */

let arrayManzanas = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana']

// MAP

/* let arrayNaranjas = arrayManzanas.map(param => {
    if (param == 'Manzana') {
        return 'Naranaja'
    }
})

console.log(arrayManzanas)
console.log(arrayNaranjas)
 */

// FILL Lllena o reemplaza desde (incluido) hasta (no incluido) Y MODIFICA EL ARRAY ORIGINAL
/* 
let resultadoFill = arrayManzanas.fill('Naranja', 2, 5)

console.log('resultado arrayManzanas', arrayManzanas)
console.log()
console.log("************")
console.log()
console.log('resultadoFill', resultadoFill)
 */

// FIND

/* 
let resultadoFind = frutas.find(param => param == 'Pera')

console.log('resultadoFind: ', resultadoFind)

 */

// FINDINDEX

/* let resutladoFindIndex = frutas.findIndex(param => param == 'Naranja')

console.log('resultadoFindIndex: ', resutladoFindIndex)
 */

// SOME

/* let resultadoSome = frutas.some(param => param =='Ciruela')
let resultadoSome2 = frutas.some(param => param =='Tomate')

console.log('resultadoSome', resultadoSome)
console.log('resultadoSome2', resultadoSome2)

 */

// EVERY
/* 
let resultadoEvery = frutas.every(param => param == 'Naranja')
console.log('resultadoEvery', resultadoEvery)

let resultadoEveryManzanas = arrayManzanas.every(param => param == 'Manzana')
console.log('resultadoEveryManzana', resultadoEveryManzanas)
 */

// POP

/* console.log('Array de frutas antes del pop: ', frutas)

let resultadoPop = frutas.pop()

console.log("se elimino el elemento ", resultadoPop)
console.log('Array de frutas despues del pop: ', frutas)
 */

// SHIFT

/* console.log(frutas)

let resultadoShift =  frutas.shift()

console.log(resultadoShift)
console.log(frutas)
 */

// PUSH

/* let resultadoPush = frutas.push('Sandia')

console.log(frutas)
console.log(resultadoPush)
 */

// UNSHIFT

/* frutas.unshift('Pomelo')

console.log(frutas)
 */


// SPLICE agrega, elimina o reemplaza segun como lo use
// orden -> indice, cantidad, elementos

/* let num = [1, 2, 3, 4, 5]
console.log(num)

num.splice(2, 1) // elimina 1 elemento en el indice 2
console.log(num) */

// let num = [1, 2, 3, 4, 5]
// console.log(num)

/* num.splice(2,0,'Melon', 'Sandia') //agrega 2 elementos desde el indice 2
console.log(num) */

/* num.splice(2, 2, 99, 100) // Reemplaza 1 elemento desde el indice 2
console.log(num) */

// SLICE
/* console.log(frutas)
let resultadoSlice = frutas.slice(2,5) //crea un array unevo desde el indice 2 (incluido) hasta el 5 (no incluido)

console.log(resultadoSlice) */

// FOREACH
//recorre arrays y ejecuta una funcion especifica en cada elemento. Se utiliza para operaciones sobre los elementos SIN MODIFICAR EL ARRAY ORIGINAL
// NO DEVUELVE UN NUEVO ARRAY

/* frutas.forEach((fruta) => {
    console.log('foreach: ', fruta)
})

frutas.forEach((fruta, indice, array) => {
    console.log(`Fruta: ${fruta}, Índice ${indice}, Array: ${array}`)
}) */

// CONCAT
/* let verduras = ['Lechuga', 'Cebolla', 'Zapallo', 'Remolacha']

console.log(frutas.concat(verduras)) */

// SORT

/* let arrayNumeros = [3, 9, 8, 5, 6, 2, 7, 4]

console.log(arrayNumeros)
console.log(arrayNumeros.sort())
 */
/* 
let arrayNumeros = [3, 31, 9, 8, 5, 6, 35, 2, 7, 1, 4, 12, 25, 10, 30]

console.log(arrayNumeros)
console.log(arrayNumeros.sort())

console.log(arrayNumeros.sort((num1, num2) => num1 - num2))
console.log(arrayNumeros.sort((num1, num2) => num2 - num1))
 */