import { Routes } from '@angular/router';
import {HomePageComponent} from "./core/view/pages/home-page/home-page.component";
import {NoutFoudPageComponent} from "./core/view/pages/error/nout-foud-page/nout-foud-page.component";
import {CrudDashboardComponent} from "./core/view/dashboard/crud-dashboard/crud-dashboard.component";
import {
  ListCompetitionCardsComponent
} from "./core/view/module/competition/list-competition-cards/list-competition-cards.component";
import {
  ListCompetitionTableComponent
} from "./core/view/module/competition/list-competition-table/list-competition-table.component";

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },

  { path: 'competition-list', component: ListCompetitionCardsComponent },





  { path: 'admin', component: CrudDashboardComponent
    , children: [
      { path: 'competition-list', component: ListCompetitionTableComponent },
      { path: 'member-list', component: ListCompetitionTableComponent },
    ]

  },










  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NoutFoudPageComponent }






];

