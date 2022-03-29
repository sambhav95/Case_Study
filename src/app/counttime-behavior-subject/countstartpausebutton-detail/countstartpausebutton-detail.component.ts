import { Component, OnInit } from '@angular/core';
import { TimecounterserviceService } from '../timecounterservice.service';

@Component({
  selector: 'app-countstartpausebutton-detail',
  templateUrl: './countstartpausebutton-detail.component.html',
  styleUrls: ['./countstartpausebutton-detail.component.css']
})
export class CountstartpausebuttonDetailComponent implements OnInit {

  constructor(private countDetail:TimecounterserviceService) { }
  startButton:any;
  pauseButton:any;
  ngOnInit(): void {
    this.countDetail.getStartButtonValue().subscribe(data=>{
      this.startButton= data;
    });
    this.countDetail.getPauseButtonValue().subscribe(data=>{
      this.pauseButton= data;
    });
  }

}
