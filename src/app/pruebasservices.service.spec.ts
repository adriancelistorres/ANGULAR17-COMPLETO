import { TestBed } from '@angular/core/testing';

import { PruebasservicesService } from './pruebasservices.service';

describe('PruebasservicesService', () => {
  let service: PruebasservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebasservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
