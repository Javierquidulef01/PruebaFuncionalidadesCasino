"use strict";
/*
Tragamoneda Clasico

linea1 = [@ # $]
linea2 = [@ @ @]  <-- unica linea ganadora
linea3 = [$ # @]

let matriz: string[][] = [linea1, linea2, linea3];

donde linea2 todos sus elementos deben ser iguales
linea2[0] == linea2[1] == linea2[2]


Tragamoneda Multilinea (varias lineas ganadoras: horizontales y diagonales)

[@ @ @] <-- linea ganadora
[@ $ #]
[$ # @]

[# @ #]
[$ $ $] <-- linea ganadora
[# $ @]

[$ $ #]
[# @ @]
[# # #]  <-- linea ganadora

[@ # $]
[@ $ #]   (diagonal de $)
[$ # @]

[@ # $]
[@ @ #]   (diagonal de @)
[$ # @]

let diagonal1 = [linea1[0], linea2[1], linea3[2]]

let diagonal2 = [linea1[3], linea2[1], linea3[0]]

*/
// -----------------------------------------------------------------------------------
// devuelve un nro aleatorio entre un minimo y un maximo (incluyendo ambos extremos)
function generarNroAleatorioEntreRango(minimo, maximo) {
    let nroAleatorio = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
    return nroAleatorio;
}
// devuelve un elemento al azar de un arreglo de string
function obtenerElementoAlAzar(elementos) {
    let pos = generarNroAleatorioEntreRango(0, elementos.length - 1);
    return elementos[pos];
}
// devuelve un arreglo de simbolos aleatorios donde la cantidad de simbolos se espera como parametro
function generarLineaSimbolos(cantSimbolos) {
    let lineaSimbolos = [];
    for (let i = 0; i < cantSimbolos; i++) {
        let simbolo = obtenerElementoAlAzar(simbolosDisponibles);
        lineaSimbolos.push(simbolo);
    }
    return lineaSimbolos;
}
// genera una matriz cuadada de dimenision N: tendrá N filas y N columnas
function generarMatrizCuadrada(dimension) {
    let matriz = [];
    for (let i = 0; i < dimension; i++) {
        let lineaSimbolos = generarLineaSimbolos(dimension);
        matriz.push(lineaSimbolos);
    }
    return matriz;
}
// devuelve una cadena en donde se encuantra armada la matriz (una fila debajo de la otra)
function presentacionMatriz(matriz) {
    let presentacion = "";
    for (let i = 0; i < matriz.length; i++) {
        presentacion += "\n" + matriz[i];
    }
    presentacion += "\n";
    return presentacion;
}
function lineaConSimbolosIguales(linea) {
    let simbolo = linea[0];
    for (let i = 1; i < linea.length; i++) {
        if (simbolo != linea[i]) {
            return false;
        }
    }
    return true;
}
// ------------------------------------------------------------------------------------
// console.clear();
console.log("INICIO PROGRAMA");
let simbolosDisponibles = ["#", "@", "$"];
let dimensionMatriz = 3; // 3 ->  3x3 (3 filas x 3 columnas)
let matriz = generarMatrizCuadrada(dimensionMatriz);
console.log("matriz generada");
console.log(matriz);
let cadena = presentacionMatriz(matriz);
console.log("Presentacion matriz generada");
console.log(cadena);
console.log("linea del medio igual: " + lineaConSimbolosIguales(matriz[1]));
console.log("FIN PROGRAMA");
