import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDepartementComponent } from './creation-departement.component';

describe('CreationDepartementComponent', () => {
  let component: CreationDepartementComponent;
  let fixture: ComponentFixture<CreationDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
