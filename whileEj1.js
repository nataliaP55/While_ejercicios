/*
FRONT
- texto informando lo requerido
-lugar para ingresar un número
- botón para verificar el número 
- respuesta si adivinó o no

Lógica

- definir un número: 7
-  verificar si el usuario adivinó el número
- mostrar un resultado

*/

const NUM_CORRECTO = 7;
const IMG_GANASTE = "/img/ganaste.gif" ;
const NUM_INGRESADO_DEF = 1;

let numero_ingresado = NUM_INGRESADO_DEF;

while (numero_ingresado != NUM_CORRECTO){
    
    numero_ingresado = prompt("Tratá de adivinar el número");
    if (numero_ingresado == NUM_CORRECTO){
        document.querySelector("#respuesta").innerHTML = `
        <h3> GANASTE </h3>
        <img src=${IMG_GANASTE}>
        `;
    }
}

   

