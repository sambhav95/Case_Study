import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'border', pathMatch: 'full' },
  {path:'border',
  loadChildren: () => import('./border-content/border-content.module').then(m => m.BorderContentModule)
},
{path:'buttonIndex',
loadChildren: () => import('./button-index-detail/button-index-detail.module').then(m => m.ButtonIndexDetailModule)},
{path:'counter',
loadChildren: () => import('./time-counter/time-counter.module').then(m => m.TimeCounterModule)},
{
  path:'gridView',
  loadChildren: () => import('./list-grid-detail/list-grid-view.module').then(m => m.ListGridViewModule)
},
{
  path:'studentdetails',
  loadChildren: () => import('./student-details/student-detail.module').then(m => m.StudentDetailModule)
},
{
  path:'countersubject',
  loadChildren: () => import('./counttime-behavior-subject/counter-behavior-subject.module').then(m => m.CounterBehaviorSubjectModule)
},
{ path: '**', redirectTo: 'border', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
