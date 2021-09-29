import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  transform(value: string, palabras: string[], cambio: string = '*'): string {

    palabras.forEach(palabra => {
      const regExp = new RegExp(palabra, 'gi')
      value = value.replace(regExp, cambio.repeat(palabra.length))
      // value = value.replaceAll(palabra, '*'.repeat(palabra.length))
    })

    return value;
  }

}

// {{'hola mundo cruel' | hideWords:['hola', 'cruel']}} => **** mundo *****
// {{'hola mundo cruel' | hideWords:'hola':'cruel':'-'}} => **** mundo *****


// replace(new RegExp(a, 'g'), 'b')
// replaceAll(a, 'b')