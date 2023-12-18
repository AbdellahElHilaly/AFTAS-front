import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {NavigationComponent} from "../../shared/layout/navigation/navigation.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Endpoint} from "../../../../util/config/endpoint";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavigationComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }

}
