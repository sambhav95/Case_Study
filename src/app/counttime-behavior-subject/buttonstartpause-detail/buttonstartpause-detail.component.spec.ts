import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonstartpauseDetailComponent } from './buttonstartpause-detail.component';

describe('ButtonstartpauseDetailComponent', () => {
  let component: ButtonstartpauseDetailComponent;
  let fixture: ComponentFixture<ButtonstartpauseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonstartpauseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonstartpauseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
