import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {initFlowbite} from "flowbite";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import { FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CompetitionService} from "../../../../service/competition.service";
import {CompetitionForm} from "../../../../model/form/competition-form";
import {Competition} from "../../../../model/competition";
import {CompetitionImpl} from "../../../../model/impl/competition-impl";



@Component({
  selector: 'app-add-competition',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    DatePipe
  ],
  templateUrl: './add-competition.component.html',
  styleUrl: './add-competition.component.css'
})
export class AddCompetitionComponent implements OnInit{
  @ViewChild('date') el:ElementRef|undefined;

  competitionFormGlobal: CompetitionForm = new CompetitionForm();

  competitionForm: FormGroup = this.competitionFormGlobal.formGroup;


  hours: Array<string> = new Array(23);
  minutes: Array<string> = new Array(59);

  constructor(private competitionService:CompetitionService) {
    this.initTimeValues();
  }

  ngOnInit(): void {
    initFlowbite();
  }



  createCompetition() {
    this.ngAfterViewInit();

    this.competitionFormGlobal.formGroup = this.competitionForm;
    let competition:Competition = new CompetitionImpl(this.competitionFormGlobal);
    this.competitionService.createCompetition(competition).subscribe(
      (data:Competition) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

  }



  ngAfterViewInit() {
    this.competitionForm.value.date = this.el?.nativeElement.value;
  }

  private initTimeValues() {

    for (let i = 0; i < 23; i++) {
      if(i<9) this.hours[i] = '0' + (i + 1).toString();
      else this.hours[i] = (i + 1).toString();
    }
    for (let i = 0; i < 59; i++) {
      if(i<9) this.minutes[i] = '0' + (i + 1).toString();
      else this.minutes[i] = (i + 1).toString();
    }
  }
}



