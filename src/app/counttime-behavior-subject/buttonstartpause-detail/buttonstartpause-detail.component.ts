import { Component, OnInit } from '@angular/core';
import { TimecounterserviceService } from '../timecounterservice.service';

@Component({
  selector: 'app-buttonstartpause-detail',
  templateUrl: './buttonstartpause-detail.component.html',
  styleUrls: ['./buttonstartpause-detail.component.css']
})
export class ButtonstartpauseDetailComponent implements OnInit {
  counterDetails:any
  constructor(private countDetail:TimecounterserviceService) { }

  ngOnInit(): void {
    this.countDetail.getStartPauseArray().subscribe(data=>{
      this.counterDetails= data;
    });
  }


}
