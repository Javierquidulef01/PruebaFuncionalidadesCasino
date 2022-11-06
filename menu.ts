import * as rs from "readline-sync";

function eleccionSiNo(pregunta: string): boolean {
    let opcion: boolean|string = false;

    do {
        opcion = rs.keyInYN(pregunta); // y = true ; n = false ; cualquier otra tecla = ""
        if (typeof(opcion) == "string") { 
            console.log("*** ingrese una opcion valida ***\n\tPara responder que SI presione la tecla y\n\tPara responder que NO presione la tecla n");
        }
    } while (typeof(opcion) == "string");

    return opcion;
}


console.log("INICIO PROGRAMA");
let indice: number= 0;
let quiereSalir: boolean = false;
let juegos: string[] = ['Tragamoneda', "Ruleta", 'Dados', 'Cartas'];

do {
    console.log("MENU");
    indice = rs.keyInSelect(juegos, 'Que opcion desea a elegir?'); // opcion CANCEL = -1
    console.log(indice);

    console.log(indice == -1? "Se ha elegido: cancelar" : "Se ha elegido: " + juegos[indice]);

    quiereSalir = eleccionSiNo("Desea salir del menu?");
   
} while(!quiereSalir);

console.log("FIN PROGRAMA");
