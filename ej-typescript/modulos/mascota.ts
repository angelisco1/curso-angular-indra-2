class Mascota {
  nombre: string
  tipo: string

  constructor(nombre: string, tipo: string = 'gato') {
    this.nombre = nombre
    this.tipo = tipo
  }
}

const roky = new Mascota('Roky', 'perro')
const felix = new M('Felix')
console.log(felix.tipo)

export default Mascota
export class A {}