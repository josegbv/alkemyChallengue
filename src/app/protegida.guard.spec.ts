import { TestBed } from '@angular/core/testing';

import { ProtegidaGuard } from './protegida.guard';

describe('ProtegidaGuard', () => {
  let guard: ProtegidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtegidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
