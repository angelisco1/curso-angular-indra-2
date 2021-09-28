import { esUnNumero, esTodoMayusculas as esMayus } from './validaciones'
import * as Validaciones from './validaciones'
import M from './mascota'

console.log(Validaciones.esUnNumero('123'))
console.log(Validaciones.esTodoMayusculas('abv'))

function esTodoMayusculas() {

}

console.log(esUnNumero('abc'))
console.log(esMayus('ABC'))

const felix = new M('Felix')
console.log(felix.tipo)