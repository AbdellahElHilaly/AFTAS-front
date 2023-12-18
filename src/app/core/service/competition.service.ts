import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Competition} from "../model/competition";
import {Endpoint} from "../../util/config/endpoint";
import {BackEndResponse} from "../model/responce";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private url = Endpoint.COMPETITION;

  constructor(private http: HttpClient) {
  }

  getCompetitionList(): Observable<BackEndResponse<Competition>> {
    return this.http.get<BackEndResponse<Competition>>(this.url);
  }

  createCompetition(competitionData: any): Observable<any> {
    return this.http.post(this.url, competitionData);
  }


}


