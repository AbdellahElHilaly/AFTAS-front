import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-skeleton-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './skeleton-card.component.html',
  styleUrl: './skeleton-card.component.css'
})
export class SkeletonCardComponent implements OnInit{
  // create an array with 10 size
  displayTimes: Array<number> = new Array(10);
  ngOnInit(): void {
    initFlowbite();
  }

}
