const express = require('express')
const cors = require('cors')
const fs = require('fs').promises
const jwt = require('jsonwebtoken')

const usuariosRegistrados = [
  { id: 1, username: 'falco', password: '1234', rol: 'ADMIN', nombreCompleto: 'Charles Falco' },
  { id: 2, username: 'blake', password: '1234', rol: 'PREMIUM', nombreCompleto: 'Octavia Blake' },
]

const getSecret = () => {
  return fs.readFile('./secret.txt')
    .then(data => data.toString())
}

const app = express()


app.use(cors({
  origin: ['http://localhost:4200'],
  // methods: "GET,POST"
}))
app.use(express.json())


app.get('/', (req, res, next) => {
  console.log(req.url, req.method)
  res.json({ok: true})
})

app.post('/register', (req, res, next) => {
  const {usuario, nombre, apellidos, password} = req.body
  const pos = usuariosRegistrados[usuariosRegistrados.length-1].id + 1

  const usuarioAGuardar = {
    id: pos,
    nombreCompleto: `${nombre} ${apellidos}`,
    rol: 'FREE',
    username: usuario,
    password: password
  }
  usuariosRegistrados.push(usuarioAGuardar)

  const user = {...usuarioAGuardar}
  delete user.password
  return res.status(201).json(user)
})


app.post('/login', (req, res, next) => {
  console.log(req.body)
  const {usuario, password} = req.body

  const usuarioRegistrado = usuariosRegistrados.find(u => {
    return u.username === usuario && u.password === password
  })

  if(!usuarioRegistrado) {
    return res.status(403).json({msg: 'El usuario/contraseña no es valido'})
  }

  getSecret()
    .then(palabraSecreta => {
      const token = jwt.sign({
        rol: usuarioRegistrado.rol,
        nombreCompleto: usuarioRegistrado.nombreCompleto,
        username: usuarioRegistrado.username
      }, palabraSecreta)

      return res.status(200).json({token: token})
    })

  // fs.readFile('./secret.txt')
  //   .then(data => {
  //     const palabraSecreta = data.toString()

  //     const token = jwt.sign({
  //       rol: usuarioRegistrado.rol,
  //       nombreCompleto: usuarioRegistrado.nombreCompleto,
  //       username: usuarioRegistrado.username
  //     }, palabraSecreta)

  //     return res.status(200).json({token: token})
  //   })

})

app.use((req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(400).json({msg: 'Necesitas la cabecera Authorization'})
  }

  // Bearer asdasdasd.asdasdas.asdasdasd
  const [bearer, jwtStr] = auth.split(' ')

  getSecret()
    .then(secret => {

      try {
        const payload = jwt.verify(jwtStr, secret)
        console.log({payload})
        next()
      } catch(err) {
        return res.status(401).json({err: 'Token invalido'})
      }

    })

})

app.get('/datos', (req, res, next) => {
  return res.status(200).json({msg: 'datos'})
})

// app.post('/datos', (req, res, next) => {

// })


app.listen(3005, () => {
  console.log('Listening on http://localhost:3005')
})