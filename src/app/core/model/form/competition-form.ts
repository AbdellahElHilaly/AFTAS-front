import {FormControl, FormGroup, Validators} from '@angular/forms';


export class CompetitionForm {
  formGroup = new FormGroup({
    location: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
    ]),


    date: new FormControl('', [Validators.required]),
    startHour: new FormControl('00', [Validators.required]),
    startMinute: new FormControl('00', [Validators.required]),
    endHour: new FormControl('00', [Validators.required]),
    endMinute: new FormControl('00', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(50), Validators.max(1000)]),

  });


  get location() {
    return this.formGroup.get('location');
  }

  get date() {
    return this.formGroup.get('date');
  }

  get startHour() {
    return this.formGroup.get('startHour');
  }

  get startMinute() {
    return this.formGroup.get('startMinute');
  }

  get endHour() {
    return this.formGroup.get('endHour');
  }

  get endMinute() {
    return this.formGroup.get('endMinute');
  }

  get amount() {
    return this.formGroup.get('amount');
  }

  valid(): boolean | undefined {
    return this.location?.valid && this.date?.valid && this.isDateValidate() &&
      this.timesRequired() && this.amount?.valid && this.isEndTimesGreaterThanStartTimes() &&
      this.isTimeOfCompetitionGreaterThanThreeHours() && this.isDateTimeInFuture();
  }


  isEndTimesGreaterThanStartTimes(): boolean | undefined {
    if (Number(this.startHour?.value) === Number(this.endHour?.value)) {
      return Number(this.startMinute?.value) < Number(this.endMinute?.value);
    } else return Number(this.startHour?.value) < Number(this.endHour?.value);
  }

  timesRequired() {
    return this.startHour?.valid && this.startMinute?.valid && this.endHour?.valid && this.endMinute?.valid;
  }


  isTimeOfCompetitionGreaterThanThreeHours(): boolean | undefined {
    if (Number(this.startHour?.value) === Number(this.endHour?.value)) {
      return Number(this.endMinute?.value) - Number(this.startMinute?.value) >= 3;
    } else return Number(this.endHour?.value) - Number(this.startHour?.value) >= 3;
  }


  isDateTimeInFuture(): boolean | undefined {

    let date = this.stringToDate({date: this.date?.value});
    let currentDate = new Date();

    if(date.getFullYear() > currentDate.getFullYear()) return true;
    else if(date.getFullYear() < currentDate.getFullYear()) return false;


    if(date.getMonth() > currentDate.getMonth()) return true;
    else if(date.getMonth() < currentDate.getMonth()) return false;


    if (date.getDate() > currentDate.getDate()) return true;
    else if(date.getDate() < currentDate.getDate()) return false;

    return false;

  }

  private stringToDate({ date }: { date: any }) {
    let dateArray = date.split('/');
    let month = parseInt(dateArray[0]) - 1;
    let day = parseInt(dateArray[1]);
    let year = parseInt(dateArray[2]);
    return new Date(year, month, day);
  }


  isDateValidate() {
    return this.isDateValid({date: this.date?.value});
  }


  private  isDateValid({date}: { date: any }): boolean | undefined {
    let dateArray = date.split('/');
    let month = dateArray[0];
    let day = dateArray[1];
    let year = dateArray[2];

    if (!this.isNumber(month) && !this.isNumber(day) && !this.isNumber(year)) return false;

    if (month > 12 || month < 1) return false;
    if (day > 31 || day < 1) return false;
    return year >= 2021;

  }


  private isNumber(month: string) {
    return !isNaN(Number(month));
  }
}


