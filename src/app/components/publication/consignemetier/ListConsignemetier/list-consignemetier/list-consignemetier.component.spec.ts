import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsignemetierComponent } from './list-consignemetier.component';

describe('ListConsignemetierComponent', () => {
  let component: ListConsignemetierComponent;
  let fixture: ComponentFixture<ListConsignemetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsignemetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsignemetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
