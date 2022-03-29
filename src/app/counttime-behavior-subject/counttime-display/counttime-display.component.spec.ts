import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounttimeDisplayComponent } from './counttime-display.component';

describe('CounttimeDisplayComponent', () => {
  let component: CounttimeDisplayComponent;
  let fixture: ComponentFixture<CounttimeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounttimeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounttimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
