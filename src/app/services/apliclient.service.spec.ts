import { TestBed } from '@angular/core/testing';

import { ApliclientService } from './apliclient.service';

describe('ApliclientService', () => {
  let service: ApliclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApliclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
