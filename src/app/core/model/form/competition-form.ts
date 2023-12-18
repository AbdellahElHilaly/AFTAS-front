import {FormControl, FormGroup} from "@angular/forms";

export  class CompetitionForm {

  formGroup = new FormGroup({
    location: new FormControl(),
    date: new FormControl(),
    startHour: new FormControl(),
    startMinute: new FormControl(),
    endHour: new FormControl(),
    endMinute: new FormControl(),
    amount: new FormControl(),
  });

}
