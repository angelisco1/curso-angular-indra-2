import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() imageUrl: string = ''
  @Input() nombre: string = ''
  @Input() descripcion: string = ''
  alt = ''

  constructor() { }

  ngOnInit(): void {
    this.alt = `Imagen de ${this.nombre}`
  }

}
