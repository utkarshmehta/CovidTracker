import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WorldDataService {
  constructor(private http: HttpClient) {}
  fetchWorldData(): Observable<any> {
      return this.http.get('https://disease.sh/v3/covid-19/all');
  }
}
