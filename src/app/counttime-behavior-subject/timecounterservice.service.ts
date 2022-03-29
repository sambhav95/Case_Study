import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimecounterserviceService {
  private counterTime: BehaviorSubject<any> = new BehaviorSubject(null);
  private startbutton: BehaviorSubject<any> = new BehaviorSubject(null);
  private pausebutton: BehaviorSubject<any> = new BehaviorSubject(null);
  private startpausedetailarray: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
  public counterTimeDetail(value:any) {
    this.counterTime.next(value);
  }
  public startButtonDetail(value:any) {
    this.startbutton.next(value);
  }
  public pauseButtonDetail(value:any) {
    this.pausebutton.next(value);
  }
  public startpausearray(value:any) {
    this.startpausedetailarray.next(value);
  }
  getValue(): Observable<any> {
    return this.counterTime.asObservable();
  }
  getStartButtonValue(): Observable<any> {
    return this.startbutton.asObservable();
  }
  getPauseButtonValue(): Observable<any> {
    return this.pausebutton.asObservable();
  }
  getStartPauseArray(): Observable<any> {
    return this.startpausedetailarray.asObservable();
  }
}
