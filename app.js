let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //implementacion de listas
let numeroMaximo = 10;

console.log(numeroSecreto);
// la funcion nos permite crear un texto. además de que sea utilizada para varios elementos, como el titulo, subtitulo, botones
//sin la necesidad de hacer una cada vez que sea necesaria como las de arriba.
function asignarTextoElemento(elemento, texto){ 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//funcion que permite verificar intento de usuario, y el "valorUsuario" es un elemento (ID) que añadimos en HTML, y en value es para mostrar el valor, el console log nos ayuda a verificar
function verificarIntento(){
    let numerosDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numerosDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numerosDeUsuario);
    //console.log(numerosDeUsuario === numeroSecreto);//tipo de dato booleano, los === es que si es un numero debe devolverse un numero.
    if(numerosDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');//esto habilita el boton.
        //reiniciarBoton();se usa este por que abajo creamos la misma funcion.
    }else{
        //el usuario no acerto
        if(numerosDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//recordar que las funciones van fuera
function limpiarCaja(){
    //el numeral es para buscar el ID del input (capturar un valor), este es un metodo largo
    //let valorCaja = document.querySelector('#valorUsuario')
    //valorCaja.value = '';
    //++++este es metodo reducido++++
    document.querySelector('#valorUsuario').value = '';
}

//esta función permite la generacion de un numero entre 1 a 10.
//abajo se aplican listas, y esta lo que hace es que una vez genere un numero va a preguntar al codigo si
// en la lista de numeors sorteados esta numero que se genero, si no lo valida y sigue, si si no lo valida
// y generara un nuevo numero.
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarBoton(){
    document.querySelector('#reiniciar').removeAttribute('disabled');
}
//Recordar, que la funcion nos permite crear un proceso, y solo se necesite llamar la funcion en vez de hacer un proceso
//con cada vez que se necesite
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del número 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//para reiniciar juego debemos limpiar caja, indicar mensaje de intervalo de numero, generar numero aleatorio
//y deshabilitar boton de nuevo juego, inicializar numero de intentos
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

/*
Tipo de Función	Ejemplo de Código	Uso
Sin retorno y sin parámetros	function saludo() { ... }	Ejecución de un bloque de código simple.
Sin retorno y con parámetros	function saludar(nombre) { ... }	Ejecución de un bloque de código con argumentos.
Con retorno y sin parámetros	function generarNumeroAleatorio() { ... }	Cálculo y retorno de un valor específico.
Con retorno y con parámetros	function sumar(a, b) { ... }	Cálculo y retorno basado en argumentos.
Función anónima	let saludo = function() { ... };	Definición de una función sin nombre localmente.
Función flecha	let cuadrado = x => x * x;	Definición concisa de funciones cortas

//    Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    console.log('Hola Mundo');
}
saludo();
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
saludar('Señor Barriga');
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function calcularDoble(numero){
    return numero * 2;
}
let resultaDoble = calcularDoble(5);
console.log(resultaDoble);
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioDeTres(a,b,c){
    return (a+b+c) / 3;
}
let resultaPromedio = promedioDeTres(3,4,5);
console.log(resultaPromedio);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorDeEllos(a,b){
    return a>b ? a : b;
}
let numeroMayor = mayorDeEllos(3,4);
console.log(numeroMayor);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroGrande(a){
    return a*a;
}
let numeroMayor1 = numeroGrande(3);
console.log(numeroMayor1);


MAS EJERCICIOS
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros
// y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del 
// dólar igual a R$4,80.
function convertirDolaresACOP(dolares) {
  let cotizacionDolar = 3.894;
  let COP = dolares * cotizacionDolar;
  return COP;
}
// Ejemplo de uso
let valorEnDolar = 2;
let valorEnCOP = convertirDolaresACOP(valorEnDolar);
console.log(`${valorEnDolar} dólares  es COP$ ${valorEnCOP}`);
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular
//, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularArea(altura, base) {
  let area = (base * altura);
  return area;
}
function calcularPerimetro(altura, base) {
  let perimetro = 2 * (base + altura);
  return perimetro;
}
let altura = 3
let base = 5
let elArea = calcularArea(altura,base)
let elPerimetro = calcularPerimetro(altura,base)
console.log(`El area es ${elArea} y el perimetro es ${elPerimetro} `);
//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);


//EJERCICIOS LISTAS
//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos(lenguagesDeProgramacion){
    console.log(lenguagesDeProgramacion)
}
function mostrarElementos() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);  
    }
}
mostrarElementos();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarElementosAlReves(lenguagesDeProgramacion){
    console.log(lenguagesDeProgramacion)
}
function mostrarElementosAlReves() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);  
    }
}
mostrarElementosAlReves();

//Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length;
}     
let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMaximoYMinimo(listaNumeros) {
    let maximo = listaNumeros[0];
    let minimo = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > maximo) {
            maximo = listaNumeros[i];
        }
        if (listaNumeros[i] < minimo) {
            minimo = listaNumeros[i];
        }
    }
    console.log('Máximo:', maximo);
    console.log('Mínimo:', minimo);
}

let numero = [15, 8, 25, 5, 12];
encontrarMayorMenor(numero);
//Crea una función que reciba una lista de números y devuelva una nueva lista con los números pares.
function filtrarNumerosPares(listaNumeros) {
    let numerosPares = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            numerosPares.push(listaNumeros[i]);
        }
    }
    return numerosPares;
}
//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma;
}
let numero1 = [15, 8, 25, 5, 12];
let suma = calcularSuma(numero1);
console.log('Suma:', suma);
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicionElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Retorna la posición del elemento
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra
}
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener el mismo tamaño");
    }
    let sumaListas = [];
    for (let i = 0; i < lista1.length; i++) {
        sumaListas.push(lista1[i] + lista2[i]);
    }
    return sumaListas;
}
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function calcularCuadrados(listaNumeros) {
    let cuadrados = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        cuadrados.push(listaNumeros[i] * listaNumeros[i]);
    }
    return cuadrados;
}
*/

