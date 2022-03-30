import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCounterComponent } from './time-counter.component';
import { RouterModule, Routes } from '@angular/router';

export const TimeCounterRoutes:Routes=[
  {
      path:'',
      component:TimeCounterComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(TimeCounterRoutes)
  ]
})
export class TimeCounterModule { }
