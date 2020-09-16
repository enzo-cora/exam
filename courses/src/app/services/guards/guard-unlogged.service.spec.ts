import { TestBed } from '@angular/core/testing';

import { GuardUnloggedService } from './guard-unlogged.service';

describe('GuardUnloggedService', () => {
  let service: GuardUnloggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardUnloggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
