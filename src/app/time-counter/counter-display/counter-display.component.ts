import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
  @Input() countDown:any;
  constructor() { }

  ngOnInit(): void {

  }

}
