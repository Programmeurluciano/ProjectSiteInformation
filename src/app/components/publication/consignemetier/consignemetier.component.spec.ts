import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignemetierComponent } from './consignemetier.component';

describe('ConsignemetierComponent', () => {
  let component: ConsignemetierComponent;
  let fixture: ComponentFixture<ConsignemetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignemetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignemetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
