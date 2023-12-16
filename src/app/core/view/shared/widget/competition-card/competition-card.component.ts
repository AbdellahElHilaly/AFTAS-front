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

// should i generate a module for this component so  can use HttpClientModule? -> yes
// ng g m core/view/shared/widget/competition-card --flat
// name: competition-card
