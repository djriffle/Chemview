import { TestBed } from '@angular/core/testing';

import { CurrentChemService } from './current-chem.service';

describe('CurrentChemService', () => {
  let service: CurrentChemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentChemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
