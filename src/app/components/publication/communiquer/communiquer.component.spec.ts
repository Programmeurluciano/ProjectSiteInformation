import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniquerComponent } from './communiquer.component';

describe('CommuniquerComponent', () => {
  let component: CommuniquerComponent;
  let fixture: ComponentFixture<CommuniquerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuniquerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuniquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
