import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
