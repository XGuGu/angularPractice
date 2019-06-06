import { TestBed } from '@angular/core/testing';

import { FuwuqiService } from './fuwuqi.service';

describe('FuwuqiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuwuqiService = TestBed.get(FuwuqiService);
    expect(service).toBeTruthy();
  });
});
