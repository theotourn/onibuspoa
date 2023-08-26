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
import { SchedulesComponent } from './components/schedules/schedules.component';
import { NumberListComponent } from './components/number-list/number-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    BusListComponent,
    SchedulesComponent,
    NumberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    BusScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
