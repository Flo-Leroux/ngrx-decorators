import { TestBed } from '@angular/core/testing';

import { NgrxDecoratorsService } from './ngrx-decorators.service';

describe('NgrxDecoratorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxDecoratorsService = TestBed.get(NgrxDecoratorsService);
    expect(service).toBeTruthy();
  });
});
