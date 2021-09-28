import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-componente-b',
  template: `
    <p>Un componente con el template en el archivo de TS</p>
  `,
  styles: [
    `p {
      color: yellow;
    }`
  ]
})
export class ComponenteBComponent {
  listaDeDatos = []

  constructor() {
  }

}
