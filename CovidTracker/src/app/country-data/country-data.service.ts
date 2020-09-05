import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryDataService {
  constructor(private http: HttpClient) {}
  fetchWorldData(): Observable<any> {
      return this.http.get('https://disease.sh/v3/covid-19/countries');
  }
}