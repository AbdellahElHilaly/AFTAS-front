import {Competition} from "../competition";
import {CompetitionForm} from "../form/competition-form";

export class CompetitionImpl implements Competition {

  amount: any;
  code: any;
  date: any;
  endTime: any;
  id: any;
  location: any;
  numberOfParticipants: any;
  startTime: any;


  constructor(form: CompetitionForm) {
    this.location = form.formGroup.value.location;
    this.date = this.dateFormat(form.formGroup.value.date);
    this.startTime = form.formGroup.value.startHour + ':' + form.formGroup.value.startMinute + ':00';
    this.endTime = form.formGroup.value.endHour + ':' + form.formGroup.value.endMinute + ':00';
    this.amount = form.formGroup.value.amount;
    this.code = "fakeCode";
    this.numberOfParticipants = 2;
  }


  private dateFormat(date: any) {
    let dateArray = date.split('/');
    let month = dateArray[0];
    let day = dateArray[1];
    let year = dateArray[2];

    return year + '-' + month + '-' + day;

  }


}
// how to generate a new component without test files : ng g c core/view/module/competition/add-competition --skipTests=true
