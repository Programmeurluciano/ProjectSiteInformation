import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutconsignemetierComponent } from './ajoutconsignemetier.component';

describe('AjoutconsignemetierComponent', () => {
  let component: AjoutconsignemetierComponent;
  let fixture: ComponentFixture<AjoutconsignemetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutconsignemetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutconsignemetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
