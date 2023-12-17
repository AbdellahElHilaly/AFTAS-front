import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-dashboard-graph',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-graph.component.html',
  styleUrl: './dashboard-graph.component.css'
})
export class DashboardGraphComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}
