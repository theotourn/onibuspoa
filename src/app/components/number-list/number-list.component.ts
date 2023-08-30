import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from 'src/app/services/bus-list-service.service';
import { BusSelectionService } from 'src/app/services/bus-selection.service';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent{

  buses: any[] = [];

  constructor(private router: Router, private busService: BusService, private BusSelectionService: BusSelectionService) { }

  onBusItemClick(busCode: string) {
    this.BusSelectionService.setSelectedBusCode(busCode);
    this.router.navigate(['/']);
  }


ngOnInit(): void {
  this.busService.getBuses().subscribe(data => {
    this.buses = data;
  });
}

}