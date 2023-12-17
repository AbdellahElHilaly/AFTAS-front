import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {NavigationDashboardComponent} from "../../shared/layout/dashboard/navigation-dashboard/navigation-dashboard.component";
import {SidebarComponent} from "../../shared/layout/sidebar/sidebar.component";
import {TableComponent} from "../../shared/layout/table/table.component";
import {NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {DashboardGraphComponent} from "../../shared/layout/dashboard/dashboard-graph/dashboard-graph.component";
import {DashboardHeadComponent} from "../../shared/layout/dashboard/dashboard-head/dashboard-head.component";
import {DashboardTableComponent} from "../../shared/layout/dashboard/dashboard-table/dashboard-table.component";

@Component({
  selector: 'app-crud-dashboard',
  standalone: true,
  imports: [
    NavigationDashboardComponent,
    SidebarComponent,
    TableComponent,
    NgIf,
    RouterOutlet,
    DashboardGraphComponent,
    DashboardHeadComponent,
    DashboardTableComponent
  ],
  templateUrl: './crud-dashboard.component.html',
  styleUrl: './crud-dashboard.component.css'
})
export class CrudDashboardComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }



}


