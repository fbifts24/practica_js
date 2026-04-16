// Funciones

// let numero = 10

// function sumar(num) {
//     return  num + 2
// }

// sumar(numero)

// let resultado = sumar(numero)

// console.log(resultado)

// console.log(`Sumo desde sumar, el resultado es ${sumar(numero)}`)



// let sumarConArrow = (num) => {
//     return num +2
// }


// console.log(`Sumo desde sumarConArrow, el resultado es ${sumarConArrow(numero)}`)



// let sumarConArrowPower = num => num +2

// console.log(`Sumo desde sumarConArrowPower, el resultado es ${sumarConArrowPower(numero)}`)


// CALLBACKS

// function saludar(param1) {
//     console.log(`Hola ${param1}`)
// }

// let nombre = 'Pedro'

// saludar(nombre)

// function procesarSaludo(param2, callback) {
//     console.log(`La funcion 'procesarSaludo' recibió como argumentos a ${param2} y a la funcion 'saludar' como callback, pues bien, saludemos entonces a ${param2} utilizando la callback: `)

//     callback(param2)
// }

// procesarSaludo(nombre, saludar)

// console.log("********************************")

// let nombre2 = "Sol"

// procesarSaludo(nombre2, saludar)

let numero1 = 2

function potenciar(num1) {
    numero1 = num1 ** 2
    return numero1
}

function operar(num2, num3, callback) {

    let numero2 = num3 ** 3 // 27

    setTimeout(callback, 8000, num2) //25 peeeeeeero despues de 3 segundos aprox

    console.log(`numero 1 vale ${numero1} y aun no se ejecutó el callback, entonces el resultado es ${numero1 + numero2}`) // numero1 vale 2 y el resultado es 29
    
    //Aca ya veo el resultado del primer setTimeOut (a los 3 seg), entonces numero1 vale 25
    
    setTimeout(() => {
        
        console.log(`numero1 vale ${numero1} y ya se ejecutó el callback, entonces el resutado es ${numero1 + numero2}`) //numero1 vale 25 y numero2 vale 27, entonces el resultado es 52

    }, 15000);
}

operar(5,3,potenciar)