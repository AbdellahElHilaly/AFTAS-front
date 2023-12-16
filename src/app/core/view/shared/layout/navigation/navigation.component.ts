import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}
