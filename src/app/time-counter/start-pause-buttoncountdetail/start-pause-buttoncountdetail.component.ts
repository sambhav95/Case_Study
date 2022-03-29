import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause-buttoncountdetail',
  templateUrl: './start-pause-buttoncountdetail.component.html',
  styleUrls: ['./start-pause-buttoncountdetail.component.css']
})
export class StartPauseButtoncountdetailComponent implements OnInit {
@Input() startButton:any;
@Input() pauseButton: any;
  constructor() { }

  ngOnInit(): void {
  }

}
