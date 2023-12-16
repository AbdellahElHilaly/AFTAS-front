import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from "../../../shared/layout/navigation/navigation.component";
import {CompetitionCardComponent} from "../../../shared/widget/competition-card/competition-card.component";
import {TableComponent} from "../../../shared/layout/table/table.component";
import {JsonPipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {Competition} from "../../../../model/competition";
import {SkeletonCardComponent} from "../../../shared/widget/skeleton-card/skeleton-card.component";
import {CompetitionService} from "../../../../service/competition.service";
import {BackEndResponse} from "../../../../model/responce";

@Component({
  selector: 'app-list-competition-cards',
  standalone: true,
  imports: [
    NavigationComponent,
    CompetitionCardComponent,
    TableComponent,
    NgForOf,
    SkeletonCardComponent,
    JsonPipe,
    NgIf,
    KeyValuePipe
  ],
  templateUrl: './list-competition-cards.component.html',
  styleUrl: './list-competition-cards.component.css'
})
export class ListCompetitionCardsComponent implements OnInit {

  response?: BackEndResponse<Competition>;


  constructor(private competitionService: CompetitionService) {
  }

  private getCompetitionList() {
    this.competitionService.getCompetitionList().subscribe(
      (data: BackEndResponse<Competition>) => {
        this.response = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  ngOnInit(): void {
    this.getCompetitionList();
  }


}

