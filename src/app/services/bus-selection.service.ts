import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusSelectionService {
  private selectedBusCodeSubject = new BehaviorSubject<string>('');

  setSelectedBusCode(busCode: string) {
    this.selectedBusCodeSubject.next(busCode);
  }

  getSelectedBusCode() {
    return this.selectedBusCodeSubject.asObservable();
  }
}
