"use strict";
import { extras, productos_heladeria } from "./productos_heladeria.js";

function stringProducto(data) {
    return `${data.name} - ${data.description} - $${data.price}`;
}

function mostrarProductos(productos) {
    let message = '';
    for (let i = 0; i < productos.length; i++) {
        message += `${i + 1} - ${stringProducto(productos[i])}\n`
    }
    return message;
}

function calcularTotal(carritoCompra) {
    let total = 0;
    for (let i = 0; i < carritoCompra.length; i++) {
        total += carritoCompra[i].price
    }
    return total
}

function mostrarTotales(carro) {
    alert('Los siguientes productos fueron seleccionados:')
    alert(mostrarProductos(carro))
    alert(`El total de la compra es de: $${calcularTotal(carro)}`)
}

let reintentosFallidos = 0;
let continuar = true;
const carrito = []

const user = prompt(
    `
    Bienvenido a su heladeria de confianza
    Por favor indiquenos su nombre:
    `,
    'Anonimo'
);

if (confirm(`Desea continuar a nuestra tienda?`)) {
    alert(
        `
        Elija los productos de a 1 
        Ingresando su numero de identificador. 
        Se le consultara si desea continuar`
    );

    while (continuar == true) {
        let eleccion = prompt(mostrarProductos(productos_heladeria))
        if (eleccion > 0 && eleccion <= productos_heladeria.length) {

            carrito.push(productos_heladeria[eleccion - 1])

            continuar = confirm('Continuar agregando productos?')
        } else {
            if (reintentosFallidos < 3) {
                alert('La opcion ingresada es invalida. Probemos una vez mas')
                reintentosFallidos += 1;
            } else {
                alert('Maximo de reintentos fallidos. Recargue la pagina')
                alert(`Vuelva pronto ${user}`);
            }
        }
    }

    mostrarTotales(carrito)

} else {
    alert(`Vuelva pronto ${user}`);
};


