import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');

    // let res = '';
    // for (let i = value.length-1; i >= 0; i--) {
    //   res += value[i]
    // }

    // return res;
  }

}

// {{'hola mundo' | reverse}} => odnum aloh