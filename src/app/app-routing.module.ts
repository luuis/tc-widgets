import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './Widgets/calendar/calendar.component';
import { MatchesComponent } from './Widgets/matches/matches.component';

const routes: Routes = [
  { path: 'matches', component: MatchesComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
