import { TestBed } from '@angular/core/testing';

import { DatosFormaService } from './datos-forma.service';

describe('DatosFormaService', () => {
  let service: DatosFormaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosFormaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
