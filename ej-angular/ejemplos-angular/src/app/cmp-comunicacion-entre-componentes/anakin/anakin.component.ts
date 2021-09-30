import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {
  nombreLuke = 'Luke Skywalker'
  nombreLeia = 'Leia Organa'

  constructor() {
    // this.cambiaNombreLuke = this.cambiaNombreLuke.bind(this)
    this.cambiaNombreLuke2 = this.cambiaNombreLuke2.bind(this)
  }

  ngOnInit(): void {
  }

  cambiaNombreLeia(nuevoNombre: any): void {
    this.nombreLeia = nuevoNombre
  }

  cambiaNombreLuke(): any {
    // console.log('aaaa', {nuevoNombre})
    // console.log('aaaa THIS', this)
    return (nuevoNombre: any) => this.nombreLuke = nuevoNombre
    // console.log('NL', this.nombreLuke)
  }

  cambiaNombreLuke2() {
    // console.log(this)
    // return () => this.cambiaNombreLuke('Angel')
    this.nombreLuke = 'Angel'
  }

}
