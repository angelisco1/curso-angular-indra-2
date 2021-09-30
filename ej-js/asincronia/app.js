// CALLBACKS
// const fs = require('fs')

// const getContenido = (err, contenido) => {
//   console.log(contenido.toString())
// }

// fs.readFile('texto1.txt', getContenido)
// fs.readFile('texto2.txt', getContenido)
// fs.readFile('texto3.txt', getContenido)

// fs.readFile('texto1.txt', (err, contenido) => {
//   console.log(contenido.toString())

//   fs.readFile('texto2.txt', (err, contenido) => {
//     console.log(contenido.toString())

//     fs.readFile('texto3.txt', (err, contenido) => {
//       console.log(contenido.toString())

//     })
//   })
// })


// PROMISES
const fs = require('fs').promises

fs.readFile('texto1.txt')
  .then(contenido => {
    console.log('p', contenido.toString())
    return fs.readFile('texto2.txt')
  })
  .then(contenido => {
    console.log('p', contenido.toString())
    return fs.readFile('texto3.txt')
  })
  .then(contenido => {
    console.log('p', contenido.toString())
  })

// ASYNC/AWAIT

async function a() {
  const contenido1 = await fs.readFile('texto1.txt')
  console.log('async', contenido1.toString())

  const contenido2 = await fs.readFile('texto2.txt')
  console.log('async', contenido2.toString())

  const contenido3 = await fs.readFile('texto3.txt')
  console.log('async', contenido3.toString())
}

a()

// const b = async () => {
//   const resp = await axios.get('http://...')

// }
// b()
