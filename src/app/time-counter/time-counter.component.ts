import { Component, OnInit } from '@angular/core';
import { DatePipePipe } from '../pipes/date-pipe.pipe';

@Component({
  selector: 'app-time-counter',
  templateUrl: './time-counter.component.html',
  styleUrls: ['./time-counter.component.css'],
})
export class TimeCounterComponent implements OnInit {

  constructor(private date:DatePipePipe) { }
  countDownTimer :any = 1000;
  interval:any
  count:number=0;
  startButtonCount:number=0;
  pauseButtonCount:number=0;
  counterDetail :Array<any>=[];
  counterValue:any;
  ngOnInit(): void {
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
        } 
      },1000);
      const details = 'Started' + ' ' + 'at' + ' ' + time;
      this.counterDetail.push(details);
      this.startButtonCount= ++this.startButtonCount;
    }
    else{
      clearInterval(this.interval);
      this.pauseButtonCount= ++this.pauseButtonCount;
      const details = 'Paused' + ' ' + 'at' + ' ' + time;
      this.counterDetail.push(details);
    }
  }
  Reset(){
    this.countDownTimer = 1000
    clearInterval(this.interval);
    this.count=0;
    this.startButtonCount=0;
    this.pauseButtonCount = 0;
    this.counterValue = '';
    this.counterDetail=[];
  }
}
