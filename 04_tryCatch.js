// MANEJO DE ERRORES

// console.log(undefinedVariable)
/* 
try {
    console.log('Intento ejecutar el codigo')

    console.log('Sale con fritas')

} catch (error) {
    console.log('Algo salio mal, ', error)
}

console.log('***************************************')

try {
    console.log('Segundo intento de ejecutar el codigo')
    throw 'hay un error en el codigo'
    console.log('Sale con fritas')
} catch (error) {
    console.log('Algo salio mal,', error)
}

console.log('***************************************')

try {
    console.log('Tercer intento de ejecutar el codigo')
    throw 'hay un error en el codigo'
    console.log('Sale con fritas')
} catch (error) {
    console.log('Algo salio mal,', error)
} finally {
    console.log('El bloque try catch termino')
}

console.log('***************************************')

 */



console.log("Vengo ejecutando mi codigo")



try {
    console.log("Cuarto intento de ejecutar codigo")
    console.log(variableNoDefinida)
    console.log('Sale con fritas')
} catch (error) {
    console.log('Algo salio mal', error)
} finally {
    console.log("El bloque try catch terminó")
}


console.log("Sigo ejecutando mi codigo")