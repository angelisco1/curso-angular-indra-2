import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {
    const datosLogin = {
      usuario,
      password
    }
    return this.http.post('http://localhost:3005/login', datosLogin)
  }

  logout() {
    localStorage.removeItem('jwtToken')
  }

  getDatos() {
    return this.http.get('http://localhost:3005/datos')
  }

}
