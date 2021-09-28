import _ from 'underscore'
// const _ = require('underscore')

const equipos = ['R. Madrid', 'Barcelona', 'Valencia', 'Villarreal']
// const equipos = ['R. Madrid', 'Barcelona', 'Valencia', 'Villarreal', 'Sevilla']
// const equipos2 = shuffleEquipos(equipos)
// getEnfrentamientos(equipos2)

// Rest Params
// Desestructuracion
// Función recursiva

function getEnfrentamientos(equipos: Array<string>): void {
  if (equipos.length < 2) {
    if (equipos.length === 1) {
      console.log(`El ${equipos[0]} pasa a la siguiente ronda`)
    }
  } else {
    const [equipo1, equipo2, ...restoEquipos] = equipos
    console.log(`${equipo1} vs ${equipo2}`)
    getEnfrentamientos(restoEquipos)
  }
}

function shuffleEquipos(equipos: Array<string>): Array<string> {
  const equiposRandom = []
  for (let i = equipos.length; i > 0; i--) {
    let randomPos = Math.floor(Math.random()*equipos.length)
    const [equipo] = equipos.splice(randomPos, 1)
    equiposRandom.push(equipo)
  }
  return equiposRandom
}

const equiposAleatorios = _.shuffle(equipos)
// const equiposAleatorios = shuffleEquipos(equipos)
getEnfrentamientos(equiposAleatorios)