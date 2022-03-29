import { Component, OnInit } from '@angular/core';
import { DatePipePipe } from '../pipes/date-pipe.pipe';
import { TimecounterserviceService } from './timecounterservice.service';

@Component({
  selector: 'app-counttime-behavior-subject',
  templateUrl: './counttime-behavior-subject.component.html',
  styleUrls: ['./counttime-behavior-subject.component.css']
})
export class CounttimeBehaviorSubjectComponent implements OnInit {
  countDownTimer :any = 1000;
  interval:any
  count:number=0;
  startButtonCount:number=0;
  pauseButtonCount:number=0;
  counterDetail :Array<any>=[];
  counterValue:any;
  constructor(private date:DatePipePipe,
    private countDetail:TimecounterserviceService) { }

  ngOnInit(): void {
   this.getData();
  }
  CountDown(){
    this.count=++this.count;
    const time= this.date.transform(new Date().toLocaleString());
   
    if(this.count %2 !==0){
      this.interval=  setInterval(() => {
        if((this.counterValue !==undefined
          || this.counterValue !=='')&&this.counterValue== this.countDownTimer){
            clearInterval(this.interval);
            this.Reset();
          window.alert("You Reaced to TimeLimit");
          
        }
        
        if(this.count> 0 && this.countDownTimer > 0) {
           this.countDownTimer--;
           this.countDetail.counterTimeDetail(this.countDownTimer);
        } 
      },1000);
      const details = 'Started' + ' ' + 'at' + ' ' + time;
      this.counterDetail.push(details);
      this.countDetail.startButtonDetail(++this.startButtonCount);
      this.countDetail.startpausearray(this.counterDetail);
      
    }
    else{
      clearInterval(this.interval);
      this.countDetail.pauseButtonDetail(++this.pauseButtonCount);
      const details = 'Paused' + ' ' + 'at' + ' ' + time;
      this.counterDetail.push(details);
      this.countDetail.startpausearray(this.counterDetail);
    }
  }
  Reset(){
    this.countDownTimer = 1000
    clearInterval(this.interval);
    this.count=0;
    this.startButtonCount=0;
    this.pauseButtonCount = 0;
    this.counterDetail=[];
    this.counterValue = '';
    this.getData();
  }
  getData(){
    this.countDetail.counterTimeDetail(this.countDownTimer);
    this.countDetail.startButtonDetail(this.startButtonCount);
    this.countDetail.pauseButtonDetail(this.pauseButtonCount);
    this.countDetail.startpausearray(this.counterDetail);
  }
}
