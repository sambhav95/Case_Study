import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridDetailComponent } from './list-grid-detail.component';

describe('ListGridDetailComponent', () => {
  let component: ListGridDetailComponent;
  let fixture: ComponentFixture<ListGridDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGridDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
