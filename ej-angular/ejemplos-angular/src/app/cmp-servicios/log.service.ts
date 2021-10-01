import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  info(msg: string): void {
    console.info(`[INFO] ${new Date()}: ${msg}`)
  }

  error(msg: string): void {
    console.error(`[ERROR] ${new Date()}: ${msg}`)
  }
}
