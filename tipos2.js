let falso = false;
let verdadero = true;
let falsoTrucho = "false";
let falsoVerdadero = "true";
let sinValor;
//console.log(typeof falsoTrucho);

/* 
son considerados false:
- un string vacío ""
- un 0 (cero)
- un undefined
*/

if ("") {
    console.log('Esto se muestra si el valor es true!');
}

if (0) {
    console.log('Esto se muestra si el valor es true 2!');
}

if (sinValor) {
    console.log('Esto se muestra si el valor es true 3!');
}