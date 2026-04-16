/*
// VAR 
var miVar = 'Texto de miVar';

console.log(miVar);

miVar = 86;

console.log(miVar);

var miVar = 'Mi nuevo miVar';

console.log(miVar);
 */

/* 
//LET

let miLet = 'Texto de miLet';

console.log(miLet);

miLet = 86;

console.log(miLet);

let miLet = 'texto de mi nuevo miLet'
 */


/* 
// CONST
const MICONST = 'Texto de MICONST';

console.log(MICONST);

MICONST = 86;

console.log(MICONST);

//const MICONST = 86;
 */

/* 
var miVar = 'Texto de miVar'

function imprimirVar() {
    // console.log('Imprimiendo miVar desde dentro de la funcion, el valor de miVar es: ', miVar)
    
    // console.log("Imprimiendo miVar desde dentro de la  funcion, el valor de miVar es: ", miVar)
    
    console.log(`Imprimiendo miVar desde dentro de la funcion, el valor de miVar es: ${miVar}`)
    
    var miVar2 = 'Texto de miVar2'

    console.log(`Imprimiendo miVar2 desde dentro de la funcion, el valor de miVar2 es: ${miVar2}`)
}

imprimirVar()

console.log(`Imprimiendo miVar desde fuera de la funcion, el valor de miVar es: ${miVar}`)

console.log(`Imprimiendo miVar2 desde fuera de la funcion, el valor de miVar2 es: ${miVar2}`)
 */
/* 
let miLet = 'Texto miLet';

console.log('Imprimiendo miLet desde fuera de la funcion, el valor de miLet es: ', miLet);

function imprimirMiLet() {
    console.log('Imprimiendo miLet desde dentro de la funcion, el valor de miLet es: ', miLet);
    
    let miLet2 = 'Texto miLet2';
    
    console.log('Imprimiendo miLet2 desde dentro de la funcion, el valor de miLet2 es: ', miLet2);
    
    if(miLet2) {
        let miLet3 = 'Texto de miLet3';
        var miVarX = 'texto miVarX'

        console.log('Imprimiendo miLet2 desde dentro del condicional, el valor de miLet2 es: ', miLet2);
        
        console.log('Imprimiendo miLet3 desde dentro del condicional, el valor de miLet3 es: ', miLet3);
    };
    
    // console.log('Imprimiendo miLet3 desde fuera del condicional, el valor de miLet3 es: ', miLet3);
    
    console.log('Imprimiendo miVarX desde fuera del condicional, el valor de miVarX es: ', miVarX);
    
}

imprimirMiLet()

// console.log('Imprimiendo miLet2 desde dentro de la funcion, el valor de miLet2 es: ', miLet2);

// console.log('Imprimiendo miLet3 desde fuera de la funcion, el valor de miLet3 es: ', miLet3);
 */
/* 
const MICONST = 'texto MICONST';

function imprimirMICONST() {
    console.log('Imprimiendo MICONST desde dentro de la funcion, el valor de MICONST es: ', MICONST);
    
    const MICONST2 = 'Texto MICONST2';

    console.log('Imprimiendo MICONST2 desde dentro de la funcion, el valor de MICONST2 es: ', MICONST2);
    
    if(MICONST2) {
        const MICONST3 = 'Texto MICONST3';
        
        console.log('Imprimiendo MICONST3 desde dentro de la funcion, el valor de MICONST3 es: ', MICONST3);
    };
    // console.log('Imprimiendo MICONST3 desde dentro de la funcion, el valor de MICONST3 es: ', MICONST3);
}

imprimirMICONST()

// console.log('Imprimiendo MICONST2 desde dentro de la funcion, el valor de MICONST2 es: ', MICONST2);

console.log('Imprimiendo MICONST3 desde dentro de la funcion, el valor de MICONST3 es: ', MICONST3);
 */

// OBJETOS

let vendedor = {
    nombre: 'Carlos',
    apellido: 'Carles',
    empresa: 'VendeTodo SA',
    habilidadesBlandas: ['trabajo en equipo', 'comunicacion', 'paciencia', 'empatia'],
    vender: function () {
        return 'Carlos vendio un algo';
    },
    obtenerNombreCompleto: function () {
        return `El nombre de este vendedor es ${this.nombre} ${this.apellido}`
    }
};

// console.log(vendedor);

// console.log('El tipo de dato de vendedor es: ', typeof vendedor);

// console.log(vendedor.nombre);

// console.log(vendedor.vender)

// console.log(vendedor.vender());

// console.log(vendedor.obtenerNombreCompleto());

// vendedor.apellido = "Sanchez"
// console.log(vendedor)

// vendedor.edad = 56
// console.log(vendedor)

// vendedor = "Carlos Sanchez"
// console.log(vendedor)

// vendedor = 123
// console.log(vendedor)


// Copiar por valor y por referencia primitivos vs no primitivos

// let a = 10
// let b = a

// console.log("a: ", a, "b: ", b)

// a = 20

// console.log("a: ", a, "b: ", b)

// console.log("**********************************")

// let obj = {nombre: "Federico"}
// let obj2 = obj

// console.log("obj: ", obj, "obj2: ", obj2)

// obj.nombre = "Sol"

// console.log("obj: ", obj, "obj2: ", obj2)

// console.log("**********************************")

// console.log(`obj: ${obj}`)
// console.log(`obj: ${JSON.stringify(obj)}`)

// console.log("**********************************")


// let objLet = {nombre: "Carla"}

// console.log(objLet)

// objLet = 123

// console.log(objLet)

// const objConst = {nombre: "Carla"}

// console.log("objconst: ", objConst)

// objConst = 123

// console.log(objConst)

// objConst = 123

// objConst = {nombre: "Susana"}

// objConst.nombre = "Susana"

// console.log("objconst: ", objConst)

// objConst.edad = 33

// console.log("objconst: ", objConst)

// delete objConst.nombre

// console.log("objconst: ", objConst)



// Mas cositas sobre objetos

let obj = {
    prop1 : "Propiedad 1",
    prop2 : "Propiedad 2"
}

console.log(typeof obj)
console.log(obj)

console.log("**********************************")


let stringi_obj = JSON.stringify(obj)

console.log(typeof stringi_obj)
console.log(stringi_obj)

console.log("**********************************")

let parse_obj = JSON.parse(stringi_obj)

console.log(typeof parse_obj)
console.log(parse_obj)

console.log("**********************************")


let numeros = {
    numero1: "1",
    "numero dos": 2
}

console.log(numeros)




































