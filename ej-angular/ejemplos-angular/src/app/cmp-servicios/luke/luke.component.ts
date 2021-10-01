import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css'],
  // providers: [DatosService]
})
export class LukeComponent implements OnInit {
  tareas: Array<Tarea> = []
  nuevaNoticia: string = ''

  constructor(
    private eventosService: EventosService,
    private datosService: DatosService) {}

  ngOnInit(): void {
    // Obtener noticia
    this.eventosService.darNoticia.subscribe((datos) => {
      this.nuevaNoticia = datos
    })
    this.tareas = this.datosService.getTareas()
  }

  guardarTarea(event: any) {
    this.datosService.addTarea(event.target.value, 'Luke')
  }

}
