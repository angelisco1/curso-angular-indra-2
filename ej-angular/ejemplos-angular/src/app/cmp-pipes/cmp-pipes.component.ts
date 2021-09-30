import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  unTexto: string = 'Un texto'
  precio: number = 318
  fecha: Date = new Date()

  persona = {
    nombre: 'Charly',
    apellido: 'Falco',
    email: 'cfalco@gmail.com'
  }

  mensaje = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...')
    }, 3000)
  })

  personaje = {}
  personaje2: Promise<any>;

  constructor() { }

  ngOnInit(): void {
    fetch('https://swapi.dev/api/people/1')
      .then(resp => resp.json())
      .then(datos => {
        this.personaje = datos
      })

    this.personaje2 = fetch('https://swapi.dev/api/people/2')
      .then(resp => resp.json())
  }

}
