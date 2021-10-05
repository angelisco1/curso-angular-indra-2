import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const method = request.method
    if (method === 'GET') {
      // Comprobamos si en la caché (que es el localstorage) están los datos de la petición que se ha realizado
      const datos = localStorage.getItem(request.url)
      if (!datos) {
        // Si no hay datos, hacemos la petición a la API y guardamos en la caché los datos que recibimos de la API
        return next.handle(request)
          .pipe(
            map((resp: any) => {
              localStorage.setItem(request.url, JSON.stringify(resp.body))
              return resp
            })
          );
      } else {
        // Si los datos ya están guardados, los obtenemos de la caché y devolvemos una respuesta. No se realiza la petición.
        return new Observable((observer) => {
          observer.next(new HttpResponse({
            body: JSON.parse(datos)
          }))
        })
      }
    }
    // Si no es un GET, se hace la petición
    return next.handle(request)
      // .pipe(
      //   map()
      // );
  }
}
