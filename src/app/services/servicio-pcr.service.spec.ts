import { TestBed } from '@angular/core/testing';

import { ServicioPCRService } from './servicio-pcr.service';

describe('ServicioPCRService', () => {
  let service: ServicioPCRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPCRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
