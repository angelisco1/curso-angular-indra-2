"use strict";
exports.__esModule = true;
var underscore_1 = require("underscore");
// const _ = require('underscore')
var equipos = ['R. Madrid', 'Barcelona', 'Valencia', 'Villarreal'];
// const equipos = ['R. Madrid', 'Barcelona', 'Valencia', 'Villarreal', 'Sevilla']
// const equipos2 = shuffleEquipos(equipos)
// getEnfrentamientos(equipos2)
// Rest Params
// Desestructuracion
// Función recursiva
function getEnfrentamientos(equipos) {
    if (equipos.length < 2) {
        if (equipos.length === 1) {
            console.log("El " + equipos[0] + " pasa a la siguiente ronda");
        }
    }
    else {
        var equipo1 = equipos[0], equipo2 = equipos[1], restoEquipos = equipos.slice(2);
        console.log(equipo1 + " vs " + equipo2);
        getEnfrentamientos(restoEquipos);
    }
}
function shuffleEquipos(equipos) {
    var equiposRandom = [];
    for (var i = equipos.length; i > 0; i--) {
        var randomPos = Math.floor(Math.random() * equipos.length);
        var equipo = equipos.splice(randomPos, 1)[0];
        equiposRandom.push(equipo);
    }
    return equiposRandom;
}
var equiposAleatorios = underscore_1["default"].shuffle(equipos);
// const equiposAleatorios = shuffleEquipos(equipos)
getEnfrentamientos(equiposAleatorios);
