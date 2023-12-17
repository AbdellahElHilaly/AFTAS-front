import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.css'
})
export class DashboardTableComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}
