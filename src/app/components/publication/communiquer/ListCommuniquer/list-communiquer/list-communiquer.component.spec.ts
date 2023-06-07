import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommuniquerComponent } from './list-communiquer.component';

describe('ListCommuniquerComponent', () => {
  let component: ListCommuniquerComponent;
  let fixture: ComponentFixture<ListCommuniquerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommuniquerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommuniquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
