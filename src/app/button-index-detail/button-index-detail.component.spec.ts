import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIndexDetailComponent } from './button-index-detail.component';

describe('ButtonIndexDetailComponent', () => {
  let component: ButtonIndexDetailComponent;
  let fixture: ComponentFixture<ButtonIndexDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIndexDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIndexDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
