import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderContentComponent } from './border-content/border-content.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TimeCounterComponent } from './time-counter/time-counter.component';
import { ListGridDetailComponent } from './list-grid-detail/list-grid-detail.component';
import { ButtonIndexDetailComponent } from './button-index-detail/button-index-detail.component';
import { CounterDisplayComponent } from './time-counter/counter-display/counter-display.component';
import { StartPauseDetailComponent } from './time-counter/start-pause-detail/start-pause-detail.component';
import { StartPauseButtoncountdetailComponent } from './time-counter/start-pause-buttoncountdetail/start-pause-buttoncountdetail.component';
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidatorDirective } from './directive/input-validator.directive';
import { CounttimeBehaviorSubjectComponent } from './counttime-behavior-subject/counttime-behavior-subject.component';
import { CounttimeDisplayComponent } from './counttime-behavior-subject/counttime-display/counttime-display.component';
import { ButtonstartpauseDetailComponent } from './counttime-behavior-subject/buttonstartpause-detail/buttonstartpause-detail.component';
import { CountstartpausebuttonDetailComponent } from './counttime-behavior-subject/countstartpausebutton-detail/countstartpausebutton-detail.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    BorderContentComponent,
    StudentDetailsComponent,
    TimeCounterComponent,
    ListGridDetailComponent,
    ButtonIndexDetailComponent,
    CounterDisplayComponent,
    StartPauseDetailComponent,
    StartPauseButtoncountdetailComponent,
    DatePipePipe,
    InputValidatorDirective,
    CounttimeBehaviorSubjectComponent,
    CounttimeDisplayComponent,
    ButtonstartpauseDetailComponent,
    CountstartpausebuttonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [DatePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
