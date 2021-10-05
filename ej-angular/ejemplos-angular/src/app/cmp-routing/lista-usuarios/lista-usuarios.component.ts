import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any = []
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios()
      .subscribe((usuarios: any) => {
        this.usuarios = usuarios
      })
  }

}
