
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


// devuelve un nro entre 0 y un maximo (sin incluir el nro maximo)
function generarNroAleatorio(maximo: number): number {
    return Math.floor(Math.random() * maximo);
}

// devuelve un elemento al azar de un arreglo de string
function obtenerElementoAlAzar(elementos: string[]): string {
    let pos: number = generarNroAleatorio(elementos.length);

    return elementos[pos];
}


// devuelve un arreglo de simbolos aleatorios donde la cantidad de simbolos se espera como parametro
function generarLineaSimbolos(cantSimbolos: number): string[] {
    let lineaSimbolos: string[] = [];

    for (let i: number = 0; i < cantSimbolos; i++) {
        let simbolo: string = obtenerElementoAlAzar(simbolosDisponibles);
        lineaSimbolos.push(simbolo);
    }
    return lineaSimbolos;
}

// genera una matriz cuadada de dimenision N: tendrá N filas y N columnas
function generarMatrizCuadrada(dimension: number): string[][] {
    let matriz: string[][] = [];

    for (let i: number = 0; i < dimension; i++) {
        let lineaSimbolos: string[] = generarLineaSimbolos(dimension);
        matriz.push(lineaSimbolos);
    }

    return matriz;
}

// devuelve una cadena en donde se encuantra armada la matriz (una fila debajo de la otra)
function presentacionMatriz(matriz: string[][]): string {
    let presentacion: string = "";
    for (let i: number = 0; i < matriz.length; i++) {
        presentacion += "\n" + matriz[i];
    }
    presentacion += "\n";
    return presentacion;
}

function lineaConSimbolosIguales(linea: string[]): boolean {
    let simbolo: string = linea[0];
    for (let i: number = 1; i < linea.length; i++) {
        if (simbolo != linea[i]) {
            return false;
        }
    }
    return true
}
// ------------------------------------------------------------------------------------
console.clear();
let simbolosDisponibles: string[] = ["#", "@", "$"];


let dimensionMatriz: number = 3; // 3 ->  3x3 (3 filas x 3 columnas)

let matriz: string[][] = generarMatrizCuadrada(dimensionMatriz);

console.log(matriz);


let cadena: string = presentacionMatriz(matriz);

console.log(cadena);

console.log("linea del medio igual: " + lineaConSimbolosIguales(matriz[1]));

