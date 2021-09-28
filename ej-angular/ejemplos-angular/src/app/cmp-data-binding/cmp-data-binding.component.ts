import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {
  nombre: string = 'Falco'
  deshabilitado: boolean = true
  // blue: string = 'blue'
  persona = {
    nombre: 'Robb',
    apellido: 'Stark'
  }

  propiedad = 'aaaa'

  constructor() { }

  ngOnInit(): void {
  }

  getSaludo(nombre: string): string {
    return `Bienvenid@ ${nombre}`
  }

  muestraMensaje(msg: string, event: any): void {
    alert(msg);
    console.log(msg)
    // event.target.innerText = 'Otra cosa'
    // (event.target as any).innerText = 'Otra cosa'
    const element: HTMLElement = event.target
    element.innerText = 'Otra movida'
    // (event.target as HTMLElement).innerText = 'Otra cosa'
    console.log(event.target)
  }

  getIntroBatman(): string {
    const nan = (1-('wat' as any)) + ''
    return new Array(16).join(nan) + ' Batman!'
  }

  canta(): void {
    const synth = window.speechSynthesis
    const utterance = new SpeechSynthesisUtterance(this.getIntroBatman())
    synth.speak(utterance)
  }

  resetearNombre(): void {
    this.nombre = ''
  }

  cambiarPropiedad(event: any) {
    console.log(event)
    // console.dir(event.target)
    this.propiedad = event.target.value
  }
}
