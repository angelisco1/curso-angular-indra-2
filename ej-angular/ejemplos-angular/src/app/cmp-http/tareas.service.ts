import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) {}

  getTareas() {
    return this.http.get(`${environment.BASE_URL_API}/tareas`, {
      // headers: {
      //   'Authorization': '1234'
      // }
    })
  }

  getTareaConCategorias(id: number) {
    return this.http.get(`${environment.BASE_URL_API}/tareas/${id}`)
      .pipe(
        mergeMap((tarea: any) => {
          const peticionesACategorias = tarea.categoriasIds.map((cId: any) => {
            return this.http.get(`${environment.BASE_URL_API}/categorias/${cId}`)
          })
          return forkJoin(peticionesACategorias)
            .pipe(
              map(categorias => {
                console.log(categorias)
                delete tarea.categoriasIds
                return {...tarea, categorias}
              })
            )
        })
      )
  }

  getTareasConCategorias() {
    return this.http.get(`${environment.BASE_URL_API}/tareas`)
      .pipe(
        mergeMap((tareas: any) => {
          const arrayCategoriasIds = tareas.map((t: any) => t.categoriasIds)
          // [[1, 3], [3], [1, 2, 3]]
          const todasLasCategoriasIds = arrayCategoriasIds.flat()
          // [1, 3, 3, 1, 2, 3]
          const categoriasIdsUnicas = [...new Set(todasLasCategoriasIds)]
          // [1, 3, 2]
          const peticionesDeCategoriasIds = categoriasIdsUnicas.map(id => {
            return this.http.get(`${environment.BASE_URL_API}/categorias/${id}`)
          })
          return forkJoin(peticionesDeCategoriasIds)
            .pipe(
              map(categorias => {
                tareas.forEach((t: any) => {
                  const categoriasDeTarea = categorias.filter((c: any) => t.categoriasIds.includes(c.id))
                  t.categorias = categoriasDeTarea
                  delete t.categoriasIds
                })
                return tareas
              })
            )
        })
      )
  }

  getTareasPorCategoria(categoriaId: number) {
    return this.getTareas()
      .pipe(
        map((tareas: any) => {
          return tareas.filter((t: any) => t.categoriasIds.includes(categoriaId))
        })
      )
  }


  guardarTarea(tarea: any) {
    return this.http.post(`${environment.BASE_URL_API}/tareas`, tarea, {
      // headers: {
      //   'Authorization': '1234'
      // }
    })
  }

  // numVotos: numVotos+1
  completarTarea(tareaId: number, completada: boolean) {
    return this.http.patch(`${environment.BASE_URL_API}/tareas/${tareaId}`, {completada}, {
      // headers: {
      //   'Authorization': '1234'
      // }
    })
  }

  eliminarTarea(tareaId: number) {
    return this.http.delete(`${environment.BASE_URL_API}/tareas/${tareaId}`, {
      // headers: {
      //   'Authorization': '1234'
      // },
      observe: 'response'
    })
  }
}
