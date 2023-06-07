import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCommuniquerComponent } from './ajout-communiquer.component';

describe('AjoutCommuniquerComponent', () => {
  let component: AjoutCommuniquerComponent;
  let fixture: ComponentFixture<AjoutCommuniquerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCommuniquerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCommuniquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
