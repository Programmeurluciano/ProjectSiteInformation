import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedataComponent } from './resumedata.component';

describe('ResumedataComponent', () => {
  let component: ResumedataComponent;
  let fixture: ComponentFixture<ResumedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
