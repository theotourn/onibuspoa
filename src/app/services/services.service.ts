import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusScheduleService {
  private apiUrl = 'https://dadosabertos.poa.br/api/3/action/datastore_search';

  constructor(private http: HttpClient) {}

  getScheduleByLine(lineNumber: string): Observable<any> {
    const resource_id = 'cb96a73e-e18b-4371-95c5-2cf20e359e6c';
    const query = lineNumber;
    const url = `${this.apiUrl}?resource_id=${resource_id}&q=${query}&limit=50000`;

    return this.http.get(url);
  }
}
