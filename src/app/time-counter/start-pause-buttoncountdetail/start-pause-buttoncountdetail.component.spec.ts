import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseButtoncountdetailComponent } from './start-pause-buttoncountdetail.component';

describe('StartPauseButtoncountdetailComponent', () => {
  let component: StartPauseButtoncountdetailComponent;
  let fixture: ComponentFixture<StartPauseButtoncountdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseButtoncountdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseButtoncountdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
