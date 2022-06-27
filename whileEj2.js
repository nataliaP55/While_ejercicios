/*
Ejercicio 2
Crear una pagina que pida adivinar una combinacion de 2 numeros hasta que ingrese los correctos y en
ese caso mostrar una imagen informando la situacional usuario
*/

const PRIMER_NUM_CORRECTO = 8;
const SEGUNDO_NUM_CORRECTO = 3;
const PRIMER_NUM_INGRESADO_DEF = 1;
const SEGUNDO_NUM_INGRESADO_DEF = 2;

let primer_numero_ingresado = "num por def";
let segundo_numero_ingresado = "num por dif";

/* while (primer_numero_ingresado != PRIMER_NUM_CORRECTO) {
    primer_numero_ingresado = prompt("Tratá de adivinar el número"); */
  
function Verificar(){
    primer_numero_ingresado = document.querySelector('#numero_uno').value;
    segundo_numero_ingresado = document.querySelector('#numero_dos').value;
    

    if ((primer_numero_ingresado == PRIMER_NUM_CORRECTO) && (segundo_numero_ingresado == SEGUNDO_NUM_CORRECTO)){
        document.querySelector("#respuesta").innerHTML = `
         
        <h3> GANASTE </h3>     
        `;

    }else if ((primer_numero_ingresado == PRIMER_NUM_CORRECTO) || (segundo_numero_ingresado == SEGUNDO_NUM_CORRECTO)) {
        document.querySelector('#respuesta').innerHTML = `
        <h3>  casi ganaste </h3>
  
        `;
    } else { 
        document.querySelector('#respuesta').innerHTML = `
            <h1> Vuelva a intentarlo </h1> 
        `;
    }
}