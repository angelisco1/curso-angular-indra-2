import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea
  constructor() { }

  ngOnInit(): void {
  }

}
