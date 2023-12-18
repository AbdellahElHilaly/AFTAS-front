import { Routes } from '@angular/router';
import {HomePageComponent} from "./core/view/pages/home-page/home-page.component";
import {NoutFoudPageComponent} from "./core/view/pages/error/nout-foud-page/nout-foud-page.component";
import {ListCompetitionCardsComponent} from "./core/view/module/competition/list-competition-cards/list-competition-cards.component";
import {ListCompetitionTableComponent} from "./core/view/module/competition/list-competition-table/list-competition-table.component";
import {DashboardComponent} from "./core/view/admin/dashboard/dashboard.component";
import {WelcomeComponent} from "./core/view/shared/layout/welcome/welcome.component";
import {EditCompetitionComponent} from "./core/view/module/competition/edit-competition/edit-competition.component";
import {AddCompetitionComponent} from "./core/view/module/competition/add-competition/add-competition.component";

export const routes: Routes = [

  { path: 'home', component: HomePageComponent ,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'competition-list', component: ListCompetitionCardsComponent },

    ]

  },




  { path: 'admin', component: DashboardComponent
    , children: [
      { path: 'competitions/list', component: ListCompetitionTableComponent },
      { path: 'competitions/create', component: AddCompetitionComponent },
      { path: 'competitions/:id/edit', component: EditCompetitionComponent },

      { path: 'member-list', component: ListCompetitionTableComponent },
      { path: 'fish-list', component: ListCompetitionTableComponent },
    ]
  },




  { path: '', redirectTo: 'home/welcome', pathMatch: 'full' },
  { path: '**', component: NoutFoudPageComponent }



];

