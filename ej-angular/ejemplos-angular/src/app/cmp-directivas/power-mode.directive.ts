import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {
  @HostBinding('style.left') left: string;
  @HostBinding('style.top') top: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.background-color') fondo: string;
  @HostBinding('style.position') position: string = 'relative';

  colores = ['blue', 'red', 'black', 'white', 'yellow']

  constructor() { }

  @HostListener('input') onInput() {
    this.left = '5px'
    this.top = '5px'
    this.color = this.getColor()
    this.fondo = this.getColor()
    setTimeout(() => {
      this.left = '0px'
      this.top = '0px'
    }, 300)
  }

  getColor(): string {
    const pos = Math.floor(Math.random()*this.colores.length)
    return this.colores[pos]
  }

}
