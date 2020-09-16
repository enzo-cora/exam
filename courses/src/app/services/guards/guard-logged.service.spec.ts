import { TestBed } from '@angular/core/testing';

import { GuardLoggedService } from './guard-logged.service';

describe('GuardLoggedService', () => {
  let service: GuardLoggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardLoggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
