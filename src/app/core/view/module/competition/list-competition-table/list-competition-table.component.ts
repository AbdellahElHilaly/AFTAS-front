import {Component, OnInit} from '@angular/core';
import {TableComponent} from "../../../shared/layout/table/table.component";
import {BackEndResponse} from "../../../../model/responce";
import {Competition} from "../../../../model/competition";
import {CompetitionService} from "../../../../service/competition.service";
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-competition-table',
  standalone: true,
  imports: [
    TableComponent,
    DatePipe,
    CurrencyPipe,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './list-competition-table.component.html',
  styleUrl: './list-competition-table.component.css'
})
export class ListCompetitionTableComponent implements OnInit{

  response?: BackEndResponse<Competition>;


  constructor(private competitionService: CompetitionService) {
  }

  getCompetitionList() {
    this.competitionService.getCompetitionList().subscribe(
      (data: BackEndResponse<Competition>) => {
        this.response = data;
        console.log(this.response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getCompetitionList();
  }

  delete(id: String) {

    alert("Delete : " + id)

  }
}

