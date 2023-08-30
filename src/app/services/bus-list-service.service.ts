import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private apiUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o';

  constructor(private http: HttpClient) { }

  getBuses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => this.processBuses(data))
    );
  }

  private processBuses(data: any[]): any[] {
    const uniqueBusesMap = new Map<string, any>();

    data.forEach(bus => {
      bus.codigo = bus.codigo.split('-')[0];
      if (!uniqueBusesMap.has(bus.nome)) {
        uniqueBusesMap.set(bus.nome, bus);
      }
    });

    return Array.from(uniqueBusesMap.values());
  }
}
