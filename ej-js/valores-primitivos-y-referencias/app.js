// Valores primitivos (string, number, boolean)
let a = 'A'
let b = a
b += '!'

console.log(a, b) // A, A!

// Valores por referencia (array, objetos, funciones)
let colores = ['blue', 'red']
let colores2 = colores
colores2.push('orange')
let colores3 = [...colores, 'orange']
let colores4 = colores.slice(0)
colores4.push('gold')

console.log(colores, colores2, colores3) // ['blue', 'red', 'orange'], ['blue', 'red', 'orange']

console.log(colores, colores2, colores3, colores4) // ['blue', 'red', 'orange'], ['blue', 'red', 'orange']

let jason = {
  nombre: 'JSON',
  apellido: 'Statham'
}

let yamel2 = {...jason, nombre: 'YML'}
console.log(jason, yamel2) // {nombre: 'JSON'}, {nombre: 'YML'}

let yamel3 = Object.assign({}, jason, {nombre: 'YML'})
console.log(jason, yamel3) // {nombre: 'JSON'}, {nombre: 'YML'}


let yamel = jason
yamel.nombre = 'YML'

console.log(jason, yamel, yamel2) // {nombre: 'YML'}, {nombre: 'YML'}, {nombre: 'YML'}
