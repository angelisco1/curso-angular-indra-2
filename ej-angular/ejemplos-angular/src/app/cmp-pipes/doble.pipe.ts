import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, suma?: number, resta?: number): number {
    let res = value * 2
    if (suma) {
      res += suma
    }
    if (resta) {
      res -= resta
    }
    return res;
  }

}
