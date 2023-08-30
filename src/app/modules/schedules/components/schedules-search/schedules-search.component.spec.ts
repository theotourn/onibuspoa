import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesSearchComponent } from './schedules-search.component';

describe('SchedulesSearchComponent', () => {
  let component: SchedulesSearchComponent;
  let fixture: ComponentFixture<SchedulesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
