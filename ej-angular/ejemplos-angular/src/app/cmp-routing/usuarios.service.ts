import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
  }

  getUsuarioById(id: string) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + id)
  }
}
