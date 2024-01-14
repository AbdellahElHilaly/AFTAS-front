import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from "../../../shared/layout/navigation/navigation.component";
import {CompetitionCardComponent} from "../../../shared/widget/competition-card/competition-card.component";
import {TableComponent} from "../../../shared/layout/table/table.component";
import {CurrencyPipe, DatePipe, JsonPipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {Competition} from "../../../../model/competition";
import {SkeletonCardComponent} from "../../../shared/widget/skeleton-card/skeleton-card.component";
import {CompetitionService} from "../../../../service/competition.service";
import {BackEndResponse} from "../../../../model/responce";
import {ResponseStatus} from "../../../shared/layout/welcome/response-status";
import {RouterLink} from "@angular/router";
import {CompetitionState} from "../../../../model/state/competition-state";

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
    KeyValuePipe,
    CurrencyPipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './list-competition-cards.component.html',
  styleUrl: './list-competition-cards.component.css'
})
export class ListCompetitionCardsComponent implements OnInit {

  public responseStatus:ResponseStatus = ResponseStatus.LOADING;
  private competitionState: CompetitionState = new CompetitionState();

  constructor(private competitionService: CompetitionService) {
  }
  getCompetitionList() {

    this.competitionService.getCompetitionList().subscribe(
      (data: BackEndResponse<Competition>) => {
        this.competitionState.competitions.set(data.data as Array<Competition>); // as Competition[] is a cast
        this.responseStatus = ResponseStatus.SUCCESS;
      },
      (error) => {
        this.responseStatus = ResponseStatus.ERROR;
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getCompetitionList();
  }

  get competitionList() {
    return this.competitionState.competitions();
  }

  protected readonly ResponseStatus = ResponseStatus;
}

