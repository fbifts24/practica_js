// EVENTOS


function cambiarDemo() {
    const original = document.getElementById('demo').innerText

    document.getElementById('demo').innerText = 'Texto modificado con JS'

    setTimeout(() => {
        document.getElementById('demo').innerText = original
    }, 3000)
}

function mostrar() {
    document.getElementById('seleccionable').innerText = Date()
}

function cambiarColor() {
    let label = document.getElementById('label')

    switch (document.getElementById('select').value) {
        case 'rojo':
            label.style.cssText = "color:red; font-weight: bold"
            break;
        case 'azul':
            label.style.cssText = "color:blue; font-weight: bold"
            break;
        case 'verde':
            label.style.cssText = "color:green; font-weight: bold"
            break;
        default:
            break;
    }
}

document.getElementById('btn-select').addEventListener('click', () => {
    label.style.cssText = "color: black; font-weight: normal"
})


function mostrarLista() {
    const arrayLista = ['Carne', 'Chorizo', 'Carbon', 'Bebida', 'Ensalada', 'Picada', 'Postre']

    let items =''

    for (let index = 0; index < arrayLista.length; index++) {
        setTimeout(() => {
           items += '<li>' + arrayLista[index] +'</li>'
           document.getElementById('lista').innerHTML = items
        }, 500 * index)
        
    }
}

function agregarItem() {
    let input = document.getElementById('itemInput')

    let texto = input.value

    if (texto === '') {
        alert("Ingresa un valor")
        return
    }

    let lista = document.getElementById('listaDinamica')

    if(!lista) {
        lista = document.createElement('ul')

        lista.id = 'listaDinamica'

        let contenedor = document.getElementById('contenedorLista')

        contenedor.appendChild(lista)
    }

    let li = document.createElement('li')

    li.textContent = texto

    lista.appendChild(li)

    input.value = ''
}



















