/*
Ejercicio 2
Crear una pagina que pida adivinar una combinacion de 2 numeros hasta que ingrese los correctos y en
ese caso mostrar una imagen informando la situacional usuario
*/

const PRIMER_NUM_CORRECTO = 8;
const SEGUNDO_NUM_CORRECTO = 11;
const PRIMER_NUM_INGRESADO_DEF = 1;
const SEGUNDO_NUM_INGRESADO_DEF = 2;

let primer_numero_ingresado = PRIMER_NUM_DEF;
let segundo_numero_ingresado = SEGUNDO_NUM_DEF;

while (primer_numero_ingresado == PRIMER_NUM_CORRECTO) {
    primer_numero_ingresado = prompt("Tratá de adivinar el número");
  
    if (primer_numero_ingresado == PRIMER_NUM_CORRECTO){
        document.querySelector("#respuesta").innerHTML = `
        <h3> Acertaste, ahora probá con otro número </h3>

        <h3> GANASTE </h3>
        <img src=${IMG_GANASTE}>
        `;
    }
}