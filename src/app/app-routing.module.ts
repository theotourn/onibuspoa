import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { BusListComponent } from './routes/bus-list/bus-list.component';
import { SchedulesComponent } from './modules/schedules/schedules.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '', component: SchedulesComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'bus-list', component: BusListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
