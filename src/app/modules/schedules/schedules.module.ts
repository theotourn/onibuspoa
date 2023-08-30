import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchedulesComponent } from './schedules.component';
import { SchedulesSearchComponent } from './components/schedules-search/schedules-search.component';
import { SchedulesListComponent } from './components/schedules-list/schedules-list.component';
import { BusScheduleService } from 'src/app/services/services.service';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SchedulesComponent,
    SchedulesSearchComponent,
    SchedulesListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    BusScheduleService
  ],
})
export class SchedulesModule { }
