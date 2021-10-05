import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {
  subs: Subscription | null = null

  constructor() { }

  ngOnInit(): void {
    const miObservable = interval(1000)
      .pipe(
        filter(num => num % 2 === 0),
        map(num => 'Número: ' + num),
      )

    this.subs = miObservable.subscribe((num) => {
      console.log(num)
    })
  }

  ngOnDestroy() {
    this.subs?.unsubscribe()
  }

}
