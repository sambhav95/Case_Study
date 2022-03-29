import { Component, OnInit } from '@angular/core';
import { TimecounterserviceService } from '../timecounterservice.service';

@Component({
  selector: 'app-counttime-display',
  templateUrl: './counttime-display.component.html',
  styleUrls: ['./counttime-display.component.css']
})
export class CounttimeDisplayComponent implements OnInit {
  countDown:any;
  constructor(private countDetail:TimecounterserviceService) { }

  ngOnInit(): void {
    this.countDetail.getValue().subscribe(data=>{
      this.countDown= data;
    })
  }
  }

