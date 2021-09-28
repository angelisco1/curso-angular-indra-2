import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario: any = {
    nombre: '',
    apellido: '',
    email: ''
  }
  ocultarDatos: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(nombre: string, apellido: string, email: string): void {
    this.usuario.nombre = nombre.trim()
    this.usuario.apellido = apellido.trim()
    this.usuario.email = email.trim()

    const props: Array<string> = Object.values(this.usuario)
    this.ocultarDatos = props.every((val: string) => val === '')
  }

}
