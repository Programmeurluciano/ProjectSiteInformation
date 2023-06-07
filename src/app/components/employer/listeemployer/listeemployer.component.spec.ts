import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeemployerComponent } from './listeemployer.component';

describe('ListeemployerComponent', () => {
  let component: ListeemployerComponent;
  let fixture: ComponentFixture<ListeemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
