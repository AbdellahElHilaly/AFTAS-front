import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navigation-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './navigation-dashboard.component.html',
  styleUrl: './navigation-dashboard.component.css'
})
export class NavigationDashboardComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }



}
