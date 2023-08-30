import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';


import { BusScheduleService } from './services/services.service';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { BusListComponent } from './routes/bus-list/bus-list.component';
import { NumberListComponent } from './components/number-list/number-list.component';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { BusService } from './services/bus-list-service.service';
import { BusSelectionService } from './services/bus-selection.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    BusListComponent,
    NumberListComponent
  ],
  imports: [
    SchedulesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    BusScheduleService,
    BusSelectionService,
    BusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
