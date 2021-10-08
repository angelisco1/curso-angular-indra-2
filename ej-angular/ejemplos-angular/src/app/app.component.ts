import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplos-angular';
  cuenta = 4
  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' }
  ]
}
