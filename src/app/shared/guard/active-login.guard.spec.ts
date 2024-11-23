import { TestBed } from '@angular/core/testing';

import { ActiveLoginGuard } from './active-login.guard';

describe('ActiveLoginGuard', () => {
  let guard: ActiveLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
