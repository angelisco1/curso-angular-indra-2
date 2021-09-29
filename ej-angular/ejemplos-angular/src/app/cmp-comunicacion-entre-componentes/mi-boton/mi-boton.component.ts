import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-boton',
  templateUrl: './mi-boton.component.html',
  styleUrls: ['./mi-boton.component.css']
})
export class MiBotonComponent implements OnInit {
  @Input() textoBtn = ''
  @Input() handleClick = () => {}

  constructor() { }

  ngOnInit(): void {
  }

}
