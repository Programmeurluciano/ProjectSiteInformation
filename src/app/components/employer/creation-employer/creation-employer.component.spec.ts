import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEmployerComponent } from './creation-employer.component';

describe('CreationEmployerComponent', () => {
  let component: CreationEmployerComponent;
  let fixture: ComponentFixture<CreationEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
