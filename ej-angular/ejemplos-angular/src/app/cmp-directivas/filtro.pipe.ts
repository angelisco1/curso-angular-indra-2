import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    console.log('Pasa por el pipe')
    const coloresFiltrados = value.filter(color => {
      return color.toLowerCase().includes(filtro.toLowerCase())
    })

    return coloresFiltrados
  }

}