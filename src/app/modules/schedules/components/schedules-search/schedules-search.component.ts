import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedules-search',
  templateUrl: './schedules-search.component.html',
  styleUrls: ['./schedules-search.component.css']
})

export class SchedulesSearchComponent implements OnInit {

  numeroLinha: string = '';

  @Output() valueEmitter = new EventEmitter<string>();

  sendValue() {
    this.valueEmitter.emit(this.numeroLinha);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
