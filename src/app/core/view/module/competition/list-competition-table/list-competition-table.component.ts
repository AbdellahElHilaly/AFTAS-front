import {Component, OnInit} from '@angular/core';
import {TableComponent} from "../../../shared/layout/table/table.component";
import {BackEndResponse} from "../../../../model/responce";
import {Competition} from "../../../../model/competition";
import {CompetitionService} from "../../../../service/competition.service";
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ResponseStatus} from "../../../shared/layout/welcome/response-status";
import {SpinnerComponent} from "../../../shared/widget/spinner/spinner.component";
import {AlertComponent} from "../../../shared/widget/alert/alert.component";

@Component({
  selector: 'app-list-competition-table',
  standalone: true,
  imports: [
    TableComponent,
    DatePipe,
    CurrencyPipe,
    NgForOf,
    NgIf,
    RouterLink,
    SpinnerComponent,
    AlertComponent
  ],
  templateUrl: './list-competition-table.component.html',
  styleUrl: './list-competition-table.component.css'
})
export class ListCompetitionTableComponent implements OnInit{

  public responseStatus:ResponseStatus = ResponseStatus.LOADING;
  public responseMessage?: String;
  protected readonly ResponseStatus = ResponseStatus;

  constructor(private competitionService: CompetitionService) {
  }

  getCompetitionList() {
    this.competitionService.getCompetitionList().subscribe(
      (data: BackEndResponse<Competition>) => {
        this.competitionService.competitions.set(data.data as Array<Competition>); // as Competition[] is a cast
        this.responseStatus = ResponseStatus.SUCCESS;
        this.responseMessage = data.message;
      },
      (error) => {
        this.responseStatus = ResponseStatus.ERROR;
        this.responseMessage = error.message;
      }
    );
  }


  ngOnInit(): void {
    this.getCompetitionList();
  }

  get competitionList() {
    return this.competitionService.competitions();
  }

  delete(id: String) {

    alert("Delete : " + id)

  }


}

