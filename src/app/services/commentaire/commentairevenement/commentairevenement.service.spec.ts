import { TestBed } from '@angular/core/testing';

import { CommentairevenementService } from './commentairevenement.service';

describe('CommentairevenementService', () => {
  let service: CommentairevenementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentairevenementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
