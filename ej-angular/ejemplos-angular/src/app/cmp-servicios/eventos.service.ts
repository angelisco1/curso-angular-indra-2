import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  darNoticia = new EventEmitter<string>();
  constructor() { }
}
