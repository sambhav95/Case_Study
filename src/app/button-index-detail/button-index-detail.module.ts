import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIndexDetailComponent } from './button-index-detail.component';

const ButtonRoutes:Routes =[{
  path:'',
  component:ButtonIndexDetailComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ButtonRoutes)
  ]
})
export class ButtonIndexDetailModule { }

