import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {NavigationDashboardComponent} from "../../shared/layout/navigation-dashboard/navigation-dashboard.component";

@Component({
  selector: 'app-crud-dashboard',
  standalone: true,
  imports: [
    NavigationDashboardComponent
  ],
  templateUrl: './crud-dashboard.component.html',
  styleUrl: './crud-dashboard.component.css'
})
export class CrudDashboardComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}
