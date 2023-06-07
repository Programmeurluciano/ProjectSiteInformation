import { TestBed } from '@angular/core/testing';

import { ConsigneMetierService } from './consigne-metier.service';

describe('ConsigneMetierService', () => {
  let service: ConsigneMetierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsigneMetierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
