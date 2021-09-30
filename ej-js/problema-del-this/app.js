// console.log(this)

function a() {
  console.log(this) // Es el objeto global
}
// a()

const persona = {
  nombre: 'Ángel',
  apellido: 'Villalba',
  getNombreCompleto: () => {
    console.log(this) // Es el objeto que se encuentra en el ambito superior a esta función
    return `${this.nombre} ${this.apellido}`
  },
  getNombreCompleto2: function() {
    console.log(this) // Es el objeto que llama a la función
    return `${this.nombre} ${this.apellido}`
  },
  getNombreCompleto3: function() {
    this.fecha = new Date()

    // const muestraFecha = function() {
    //   console.log(this)
    //   console.log('Fecha: ', this.fecha)
    // }

    // const muestraFecha = function() {
    //   console.log(this)
    //   console.log('Fecha: ', this.fecha)
    // }.bind(this)

    // let that = this
    // const muestraFecha = function() {
    //   console.log(that)
    //   console.log('Fecha: ', that.fecha)
    // }

    const muestraFecha = () => {
      console.log(this)
      console.log('Fecha: ', this.fecha)
    }
    muestraFecha()

    return `${this.nombre} ${this.apellido} (${this.fecha})`
  }
}
console.log(persona.getNombreCompleto2())

persona.getNombreCompleto2 = persona.getNombreCompleto2.bind({nombre: 'Charly', apellido: 'Falco'})

// console.log(persona.getNombreCompleto())
console.log(persona.getNombreCompleto2())


console.log(persona.getNombreCompleto3())

console.log(persona)

// function b() {
//   console.log(this.fecha)
// }
// b()