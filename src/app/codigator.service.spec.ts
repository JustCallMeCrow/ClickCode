import { TestBed } from '@angular/core/testing';

import { CodigatorService } from './codigator.service';

describe('CodigatorService', () => {
  let service: CodigatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
