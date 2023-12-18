import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-welcome',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent  implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}
