import { EventEmitter, Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { v4 as uuidv4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  tareas: Array<Tarea> = [
    new Tarea('Eliminar la estrella de la muerte 2', false, 'Leia', uuidv4()),
    new Tarea('Eliminar la estrella de la muerte 1', true, 'Leia', uuidv4())
  ]

  tareaGuardada = new EventEmitter<string>()

  constructor() { }

  getTareas(): Array<Tarea> {
    return this.tareas
  }

  addTarea(titulo: string, autor: string): void {
    this.tareas.push(new Tarea(titulo, false, autor, uuidv4()))
    this.tareaGuardada.emit(autor + ' ha guardado una tarea')
  }
}
