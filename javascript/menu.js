"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rs = __importStar(require("readline-sync"));
function eleccionSiNo(pregunta) {
    let opcion = false;
    do {
        opcion = rs.keyInYN(pregunta); // y = true ; n = false ; cualquier otra tecla = ""
        if (typeof (opcion) == "string") {
            console.log("*** ingrese una opcion valida ***\n\tPara responder que SI presione la tecla y\n\tPara responder que NO presione la tecla n");
        }
    } while (typeof (opcion) == "string");
    return opcion;
}
console.log("INICIO PROGRAMA");
let indice = 0;
let quiereSalir = false;
let juegos = ['Tragamoneda', "Ruleta", 'Dados', 'Cartas'];
do {
    console.log("MENU");
    indice = rs.keyInSelect(juegos, 'Que opcion desea a elegir?'); // opcion CANCEL = -1
    console.log(indice);
    console.log(indice == -1 ? "Se ha elegido: cancelar" : "Se ha elegido: " + juegos[indice]);
    quiereSalir = eleccionSiNo("Desea salir del menu?");
} while (!quiereSalir);
console.log("FIN PROGRAMA");
