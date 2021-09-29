import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css']
})
export class LukeComponent implements OnInit {
  @Input() nombre = ''
  @Input() handleChangeNombre: any;
  constructor() { }

  ngOnInit(): void {
  }

  // handleChangeNombreLuke(txt: string): any {
  //   console.log('bbbb')
  //   let that = this
  //   return () => {
  //     console.log('cccc', {txt})
  //     console.log(that)
  //     that.handleChangeNombre(txt)
  //   }
  // }

}
