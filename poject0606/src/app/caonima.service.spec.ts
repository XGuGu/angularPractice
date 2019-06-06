import { TestBed } from '@angular/core/testing';

import { CaonimaService } from './caonima.service';

describe('CaonimaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaonimaService = TestBed.get(CaonimaService);
    expect(service).toBeTruthy();
  });
});
