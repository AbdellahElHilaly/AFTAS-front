import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-dashboard-head',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-head.component.html',
  styleUrl: './dashboard-head.component.css'
})
export class DashboardHeadComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }



}
