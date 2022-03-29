import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseDetailComponent } from './start-pause-detail.component';

describe('StartPauseDetailComponent', () => {
  let component: StartPauseDetailComponent;
  let fixture: ComponentFixture<StartPauseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
