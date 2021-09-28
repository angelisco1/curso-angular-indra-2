"use strict";
exports.__esModule = true;
var validaciones_1 = require("./validaciones");
var Validaciones = require("./validaciones");
var mascota_1 = require("./mascota");
console.log(Validaciones.esUnNumero('123'));
console.log(Validaciones.esTodoMayusculas('abv'));
function esTodoMayusculas() {
}
console.log((0, validaciones_1.esUnNumero)('abc'));
console.log((0, validaciones_1.esTodoMayusculas)('ABC'));
var felix = new mascota_1["default"]('Felix');
console.log(felix.tipo);
