import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEnlace(event: any) {
    event.preventDefault()
    console.log(event.target.href)
  }

  muestraLaCajaPulsada(caja: string, event: any) {
    console.log(event)
    event.stopPropagation()
    console.log(event)
    alert('Has pulsado sobre la ' + caja)
  }

}
