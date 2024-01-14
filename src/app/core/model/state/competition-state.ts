import {signal, WritableSignal} from "@angular/core";
import {Competition} from "../competition";

export class CompetitionState {

  private _competitions: WritableSignal<Competition[]> = signal([]);
  private isFetching: boolean = false;


  get competitions(): WritableSignal<Competition[]> {
    
    if (!this.isFetching) {
      this.isFetching = true;
    }
    return this._competitions;
    
  }
  
}
