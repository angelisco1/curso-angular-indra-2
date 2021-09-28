"use strict";
exports.__esModule = true;
exports.A = void 0;
var Mascota = /** @class */ (function () {
    function Mascota(nombre, tipo) {
        if (tipo === void 0) { tipo = 'gato'; }
        this.nombre = nombre;
        this.tipo = tipo;
    }
    return Mascota;
}());
var roky = new Mascota('Roky', 'perro');
var felix = new M('Felix');
console.log(felix.tipo);
exports["default"] = Mascota;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;
