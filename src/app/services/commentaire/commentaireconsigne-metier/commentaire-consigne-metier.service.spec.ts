import { TestBed } from '@angular/core/testing';

import { CommentaireConsigneMetierService } from './commentaire-consigne-metier.service';

describe('CommentaireConsigneMetierService', () => {
  let service: CommentaireConsigneMetierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireConsigneMetierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
