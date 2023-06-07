import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniqueridComponent } from './communiquerid.component';

describe('CommuniqueridComponent', () => {
  let component: CommuniqueridComponent;
  let fixture: ComponentFixture<CommuniqueridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuniqueridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuniqueridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
