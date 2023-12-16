import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nout-foud-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nout-foud-page.component.html',
  styleUrl: './nout-foud-page.component.css'
})
export class NoutFoudPageComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}

