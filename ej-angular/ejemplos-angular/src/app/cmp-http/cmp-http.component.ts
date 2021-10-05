import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.getTareas()
      .subscribe(datos => {
        console.log(datos)
      })
  }

  crearTarea() {
    const tarea = {
      titulo: 'Tarea 0',
      completada: false,
      usuarioId: 1,
      fecha: '04/10/2021'
    }

    this.tareasService.guardarTarea(tarea)
      .subscribe((tareaCreada) => {
        console.log({tareaCreada})
      })
  }

  completarTarea() {
    this.tareasService.completarTarea(7, true)
      .subscribe((tareaCompletada) => {
        console.log({tareaCompletada})
      })
  }

  borrarTarea() {
    this.tareasService.eliminarTarea(7)
      .subscribe((resp) => {
        console.log({resp})
        console.log('Se ha eliminado correctamente')
      })
  }

}
