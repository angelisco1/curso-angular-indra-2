import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css'],
  // providers: [DatosService]
})
export class LeiaComponent implements OnInit {
  tareas: Array<Tarea> = []
  mensaje: string = ''

  constructor(
    private eventosService: EventosService,
    private datosService: DatosService) { }

  ngOnInit(): void {
    this.tareas = this.datosService.getTareas().filter(t => t.autor==='Leia')
    this.datosService.tareaGuardada.subscribe(msg => {
      this.mensaje = msg
    })
  }

  darLaNoticia() {
    const mensajes = ['Luke, yo soy tu hermana', 'Hola Luky, que grande te has vuelto']
    const msg = mensajes[Math.floor(Math.random()*mensajes.length)]
    this.eventosService.darNoticia.emit(msg)
  }

  guardarTarea(event: any) {
    this.datosService.addTarea(event.target.value, 'Leia')
  }

}
