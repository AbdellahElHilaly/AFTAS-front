import { Component, OnInit} from '@angular/core';

import {initFlowbite} from "flowbite";
import {DashboardGraphComponent} from "../dashboard-graph/dashboard-graph.component";
import {DashboardHeadComponent} from "../dashboard-head/dashboard-head.component";
import {DashboardTableComponent} from "../dashboard-table/dashboard-table.component";
import {
  NavigationDashboardComponent
} from "../navigation-dashboard/navigation-dashboard.component";
import {RouterOutlet} from "@angular/router";
import {DashboardSidebarComponent} from "../dashboard-sidebar/dashboard-sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardGraphComponent,
    DashboardHeadComponent,
    DashboardTableComponent,
    NavigationDashboardComponent,
    RouterOutlet,
    DashboardSidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
