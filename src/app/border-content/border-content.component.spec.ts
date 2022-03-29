import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderContentComponent } from './border-content.component';

describe('BorderContentComponent', () => {
  let component: BorderContentComponent;
  let fixture: ComponentFixture<BorderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
