import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercoComponent } from './headerco.component';

describe('HeadercoComponent', () => {
  let component: HeadercoComponent;
  let fixture: ComponentFixture<HeadercoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
