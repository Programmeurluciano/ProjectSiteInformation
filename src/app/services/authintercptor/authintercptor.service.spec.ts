import { TestBed } from '@angular/core/testing';

import { AuthintercptorService } from './authintercptor.service';

describe('AuthintercptorService', () => {
  let service: AuthintercptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthintercptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
