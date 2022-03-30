import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BorderContentComponent } from './border-content.component';

export const BorederContentRoutes:Routes=[
  {
      path:'',
      component:BorderContentComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BorederContentRoutes)
  ]
})
export class BorderContentModule { }
