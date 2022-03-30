import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounttimeBehaviorSubjectComponent } from './counttime-behavior-subject.component';

export const CounterRoutes:Routes=[
  {
      path:'',
      component:CounttimeBehaviorSubjectComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CounterRoutes)
  ]
})
export class CounterBehaviorSubjectModule { }
