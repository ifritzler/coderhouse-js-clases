"use strict";
import { extras, productos_heladeria } from "./productos_heladeria.js";

function stringProducto(data) {
    return `${data.name} - ${data.description} - $${data.price}`
}

function mostrarProductos(productos) {
    let message = ''
    for (let i = 0; i < productos.length; i++) {
        message += `${i + 1} - ${stringProducto(productos[i])}\n`
    }
    return message
}

let continuar = true;

const user = prompt(
    `
    Bienvenido a su heladeria de confianza
    Por favor indiquenos su nombre:
    `
);

if (confirm(`Desea continuar a nuestra tienda?`)) {

} else {
    alert(`Vuelva pronto ${user}`);
};

alert(
    `
    Elija los productos de a 1 
    Ingresando su numero de identificador. 
    Se le consultara si desea continuar`
);

while (continuar == true) {
    mostrarProductos(productos_heladeria);
    continuar = false;
}