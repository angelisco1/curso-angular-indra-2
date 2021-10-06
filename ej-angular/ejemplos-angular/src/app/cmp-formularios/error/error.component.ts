import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnChanges {
  @Input() errores: any
  erroresAPintar: Array<string> = []
  constructor() { }

  ngOnChanges(): void {
    this.erroresAPintar = []
    for (let errorKey in this.errores) {
      switch(errorKey) {
        case 'required':
          this.erroresAPintar.push('El campo es obligatorio')
          break
        case 'pattern':
          this.erroresAPintar.push('No cumple con la expresión regular')
          break
        case 'minlength':
          this.erroresAPintar.push(`El campo necesita ${this.errores[errorKey].requiredLength}. Te faltan ${this.errores[errorKey].requiredLength - this.errores[errorKey].actualLength} caracteres`)
          break
        case 'esStark':
          this.erroresAPintar.push(`El usuario no es un Stark`)
          break
      }
    }
  }
}
