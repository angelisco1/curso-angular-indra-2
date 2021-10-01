const series = [
  { titulo: 'Game of Thrones', numTemporadas: 10, finalizada: true },
  { titulo: 'The Walking Dead', numTemporadas: 10, finalizada: false },
  { titulo: 'Gangland Undercover', numTemporadas: 3, finalizada: true },
  { titulo: 'The Leftovers', numTemporadas: 3, finalizada: true },
]

// forEach
series.forEach((serie, index, arrSeries) => {
  console.log(JSON.stringify(serie, null, 2))
})

// map
// array (ref) -> object (ref)
const seriesConUnaX = series.map((serie, index, arrSeries) => {
  const serieNueva = {...serie}
  if (serieNueva.finalizada) {
    serieNueva.titulo = 'x ' + serieNueva.titulo
  }
  return serieNueva
})
console.log(seriesConUnaX)
console.log(series)

const numeros = [1, 2, 3, 4] // array (ref) -> number (primitivos)
const tripleDeNumeros = numeros.map((n, index, arrNums) => n * 3)
console.log(numeros)
console.log(tripleDeNumeros) // [3, 6, 9, 12]


// filter
const seriesLargas = series.filter((serie, index, arrSeries) => {
  return serie.numTemporadas > 5
})
console.log(seriesLargas)
console.log(series)


// find
const primeraSerieFinalizada = series.find((serie, index, arrSeries) => {
  return serie.finalizada
  // return serie.numTemporadas === 3
})

console.log(primeraSerieFinalizada)


// reduce
const numTemporadasTotales = series.reduce((totalTemporadas, serie, index, arrSeries) => {
  console.log(JSON.stringify(totalTemporadas))
  return totalTemporadas += serie.numTemporadas
}, 0)

console.log(numTemporadasTotales)

const chunks = ['Hola, s', 'oy Ánge', 'l Villal', 'ba']
const contenido = chunks.reduce((acc, str) => {
  return acc += str
}, '')
console.log(contenido)
// console.log(chunks.join(''))

const angelATrozos = [{nombre: 'Ángel'}, {apellido: 'Villalba', email: 'angel@gmail.com'}, {puesto: 'Formador'}]
const angel = angelATrozos.reduce((acc, prop) => {
  Object.keys(prop).forEach((key) => {
    acc[key] = prop[key]
  })
  return acc
}, {})

console.log(angel)

// every, some