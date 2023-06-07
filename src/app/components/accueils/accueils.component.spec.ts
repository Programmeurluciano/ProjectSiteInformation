import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilsComponent } from './accueils.component';

describe('AccueilsComponent', () => {
  let component: AccueilsComponent;
  let fixture: ComponentFixture<AccueilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
