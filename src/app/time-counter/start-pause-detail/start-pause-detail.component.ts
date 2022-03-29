import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause-detail',
  templateUrl: './start-pause-detail.component.html',
  styleUrls: ['./start-pause-detail.component.css']
})
export class StartPauseDetailComponent implements OnInit {
  @Input() counterDetails: any;
  constructor() { }

  ngOnInit(): void {

  }

}
