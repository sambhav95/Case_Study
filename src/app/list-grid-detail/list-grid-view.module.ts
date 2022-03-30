import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListGridDetailComponent } from './list-grid-detail.component';

export const ListRoutes:Routes=[
  {
      path:'',
      component:ListGridDetailComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ListRoutes)
  ]
})
export class ListGridViewModule { }
