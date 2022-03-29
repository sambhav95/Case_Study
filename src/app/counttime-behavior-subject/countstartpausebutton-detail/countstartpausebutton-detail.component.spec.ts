import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountstartpausebuttonDetailComponent } from './countstartpausebutton-detail.component';

describe('CountstartpausebuttonDetailComponent', () => {
  let component: CountstartpausebuttonDetailComponent;
  let fixture: ComponentFixture<CountstartpausebuttonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountstartpausebuttonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountstartpausebuttonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
