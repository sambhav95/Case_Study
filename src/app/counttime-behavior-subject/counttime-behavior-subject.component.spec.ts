import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounttimeBehaviorSubjectComponent } from './counttime-behavior-subject.component';

describe('CounttimeBehaviorSubjectComponent', () => {
  let component: CounttimeBehaviorSubjectComponent;
  let fixture: ComponentFixture<CounttimeBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounttimeBehaviorSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounttimeBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
