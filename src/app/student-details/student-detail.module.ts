import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details.component';

export const StudentRoutes:Routes=[
  {
      path:'',
      component:StudentDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(StudentRoutes)
  ]
})
export class StudentDetailModule { }
