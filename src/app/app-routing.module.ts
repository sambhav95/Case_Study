import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorderContentComponent } from './border-content/border-content.component';
import { ButtonIndexDetailComponent } from './button-index-detail/button-index-detail.component';
import { CounttimeBehaviorSubjectComponent } from './counttime-behavior-subject/counttime-behavior-subject.component';
import { ListGridDetailComponent } from './list-grid-detail/list-grid-detail.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TimeCounterComponent } from './time-counter/time-counter.component';

const routes: Routes = [
  { path: '', redirectTo: 'border', pathMatch: 'full' },
  {path:'border',
  component: BorderContentComponent
},
{path:'buttonIndex',
component:ButtonIndexDetailComponent},
{path:'counter',
component:TimeCounterComponent},
{
  path:'gridView',
  component:ListGridDetailComponent
},
{
  path:'studentdetails',
  component:StudentDetailsComponent
},
{
  path:'countersubject',
  component:CounttimeBehaviorSubjectComponent
},
{ path: '**', redirectTo: 'border', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
