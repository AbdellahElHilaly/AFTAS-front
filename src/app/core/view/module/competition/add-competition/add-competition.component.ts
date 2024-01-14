import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {initFlowbite} from "flowbite";
import {DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CompetitionService} from "../../../../service/competition.service";
import {CompetitionForm} from "../../../../model/form/competition-form";
import {Competition} from "../../../../model/competition";
import {CompetitionImpl} from "../../../../model/impl/competition-impl";
import {Router} from "@angular/router";



@Component({
  selector: 'app-add-competition',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    DatePipe,
    NgIf
  ],
  templateUrl: './add-competition.component.html',
  styleUrl: './add-competition.component.css'
})
export class AddCompetitionComponent implements OnInit{
  @ViewChild('date') el:ElementRef|undefined;

  competitionFormGlobal: CompetitionForm = new CompetitionForm();

  hours: Array<string> = new Array(23);
  minutes: Array<string> = new Array(59);
  private router: Router = new Router();

  constructor(private competitionService:CompetitionService) {
    this.initTimeValues();
  }

  ngOnInit(): void {
    initFlowbite();
  }



  createCompetition() {

    this.ngAfterViewInit();

    let competition:Competition = new CompetitionImpl(this.competitionFormGlobal);
    this.competitionService.createCompetition(competition).subscribe(
      (data:Competition) => {
        this.router.navigate(['admin/competitions/list']).then(r => alert("Competition created successfully"));
      },
      (result) => {
        console.error(result);
        alert(result.error.message);
      }
    );

  }


  ngAfterViewInit() {
    this.competitionFormGlobal.formGroup.value.date = this.el?.nativeElement.value;
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

  protected readonly CompetitionForm = CompetitionForm;

}



