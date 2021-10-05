import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarNumerosTarjeta'
})
export class OcultarNumerosTarjetaPipe implements PipeTransform {

  transform(value: string): string {
    const ultimosNumeros = value.slice(-4)
    return '**** **** **** ' + ultimosNumeros;
  }

}
