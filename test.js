let miNombre = "Eric"; //aqui declaro una variable con alcance global

if (true) {
    //let miNombre = "Daniel"; //aqui declaro una variable con alcance local
    console.log('alcance (scope) local: ', miNombre);
}

console.log('alcance (scope) global:', miNombre);

let domicilio = 'acevedo 225';
let ciudad = 'capital';
let provincia = 'Salta';

let domicilioCompleto = `${domicilio} ${ciudad}, ${provincia}`

console.log(domicilioCompleto);
