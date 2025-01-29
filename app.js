//let titulo = document.querySelector('h1'); //docuent es como el enlace entre el html y el javascript
//titulo.innerHTML = 'Juego del número secreto'; saco la declaracion de variables y las creo como función

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Selecciona un número entre el 1 y el 10';
//acá declaro la función y coloco la acción que hace la función
/*
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //declaración de arreglo o lista
let numeroMaximo = 10;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto) {  //función genérica para poder volver a llamarla si la necesito

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {//=== compara que mis datos sean iguales en valor y tipo
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acierta
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','Numero secreto es menor');
        } else {
        asignarTextoElemento('p','Numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//para limpiar la caja cuando no acierto el númerp
function limpiarCaja(){
    //forma de hacerlo con 2 líneas de código
    //let valorCaja = document.querySelector('#valorUsuario');  //usando querySelector con ID se úede tb per se debe usar #
    //valorCaja.value = '';      
    // 1 línea de código
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto(){
    //return Math.floor(Math.random()*10)+1; así estaba antes
    // ahora lo modifico para que mi número secreto no se pueda repetir con los juegos anteriores
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //antes de generar el número secreto reviso si ya sorteamos todos los números, si ya los sortemaos cerramos el juego
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',`ya se sortearon todos los números posibles`);

    } else {
    //ahora reviso si el número generado ya está en mi lista (arreglo) y uso el método includes que recorre mi arreglo y me dice si un valor está (true) o no (false) rm rñ array
     if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); //recursividad, la función se llama a si misma
        } else {
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Selecciona un número entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //que tenemos que hacer para reiniciar el juego: 
    // limpiar la caja, 
    limpiarCaja();
    // indicar mensaje de inicio de intervalo de números a seleccionar
    //generar número aleatorio
    //reiniciar el número de intentos a 0  
    condicionesIniciales();
    // deshabilitar el botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();

*/
/*
let mensaje;
function holaM(mensaje) {

    console.log(mensaje)

}

*/

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
/*
function calculoImc(altura, peso) {

    let imc = peso/(altura*altura);
    console.log(`tu imc es de ${imc}`);
}

calculoImc(1.77,75);
*/
/*
//Crea una función que calcule el valor del factorial de un número pasado como parámetro
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let fact = factorial(8);
console.log(fact);
*/

// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript','C','C++','Python'];
console.log(lenguagesDeProgramacion);
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push( 'Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos() {
    console.log(lenguagesDeProgramacion);
}
mostrarElementos();
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function lenguajesInverso() {
    lenguagesDeProgramacion.reverse();
    for (let i = 0; i <lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
       }
    
}

lenguajesInverso();

// Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [5,8,9,7,6,4,5];
let suma = 0;
function promedioLista(nombreLista) {
    for (let i = 0; i < nombreLista.length; i++) {
        suma += nombreLista[i];
    } 

    let media = suma/listaNumeros.length;
    console.log(`La media es: ${media}`);
}
promedioLista(listaNumeros);

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// Crea una función que devuelva la suma de todos los elementos en una lista.
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.