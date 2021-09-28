"use strict";
exports.__esModule = true;
exports.esTodoMayusculas = exports.esUnNumero = void 0;
function esUnNumero(texto) {
    var regExp = new RegExp('\\d+', 'g');
    return regExp.test(texto);
    // return /\d+/.test(texto)
}
exports.esUnNumero = esUnNumero;
function esTodoMayusculas(texto) {
    return texto === texto.toUpperCase();
}
exports.esTodoMayusculas = esTodoMayusculas;
var A = true;
