import {Component, Input, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {Competition} from "../../../../model/competition";


@Component({
  selector: 'app-competition-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './competition-card.component.html',
  styleUrl: './competition-card.component.css'
})
export class CompetitionCardComponent implements OnInit{

  @Input() competition?: Competition;
  ngOnInit(): void {
    initFlowbite();
  }

}

