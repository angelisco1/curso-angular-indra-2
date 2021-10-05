import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  usuario: any = null

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log({params})
      if (params.has('usuarioId')) {
        const id = params.get('usuarioId')
        if (id) {
          this.usuariosService.getUsuarioById(id)
            .subscribe((usuario: any) => {
              this.usuario = usuario
            })
        }
      }
    })
  }

}
