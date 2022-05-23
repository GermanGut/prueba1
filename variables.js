
/* NUMBER */

let edad = 26; // number (entero)
let altura = 1.75; // number (decimal)

let precioManzana = 200;
let precioNaranja = 130;
let precioBanana = 400;

let totalCompra = (precioBanana * 2) + (precioManzana * 1.5) + (precioNaranja * 0.5);

/* STRING */

let nombre = "Ignacio";
let apellido = 'Marquez';

let nombreCompleto = nombre + ' ' + apellido; //concatenar!!!

let direccion = "Las amapolas 1240";
let localidad = "San Lorenzo";
let provincia = "Santa Fe";

let domicilio = direccion + " " + localidad + ", " + provincia;

/* string interpolation */
let domicilio2 = `${direccion} ${localidad}, ${provincia}`;


console.log(domicilio2);