import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Observer, Subscription } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {
  suscripciones: Array<Subscription> = []
  mostrarComponente = true

  constructor() { }

  ngOnInit(): void {
    // this.crearObservable()
    // this.observableConOperadores()
    // this.observableDeEvento()
  }

  toggleComponente() {
    this.mostrarComponente = !this.mostrarComponente
  }

  crearObservable() {
    const miObservable = new Observable((observer: Observer<string>) => {
      observer.next('Te acabas de suscribir')
      for (let i = 0;i < 5;i++) {
        setTimeout(() => {
          observer.next('El mensaje ' + i)
        }, 1000*i)
      }
      setTimeout(() => {
        // observer.error(new Error('Ha ocurrido un error'))
        observer.complete()
      }, 7000)
      setTimeout(() => {
        observer.next('Este mensaje no se muestra')
      }, 8000)
    })

    const subs: Subscription = miObservable.subscribe(
      (msg: string) => { // Cuando se llama al next
        console.log(msg)
      },
      (err) => { // Cuando se llama al error
        console.log(err)
      },
      () => { // Cuando se llama al complete
        console.log('El observable se ha terminado')
      }
    )

    this.suscripciones.push(subs)
  }

  observableConOperadores() {
    const miObservable = interval(1000)
      .pipe(
        filter(num => num % 2 === 0),
        // take(5),
        map(num => 'Número: ' + num),
      )

    const subs: Subscription = miObservable.subscribe((num) => {
      console.log(num)
    })

    this.suscripciones.push(subs)
  }

  observableDeEvento() {
    const miObservable = fromEvent(document.getElementsByTagName('h2'), 'mouseenter')

    miObservable.subscribe((event) => {
      console.log({event})
    })
  }

  cancelarSuscripciones() {
    // this.suscripciones[0].unsubscribe()
    // this.suscripciones[1].unsubscribe()
    this.suscripciones.forEach((subs) => {
      subs.unsubscribe()
    })
  }

}
