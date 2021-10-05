import { TestBed } from '@angular/core/testing';

import { NuevoUsuarioGuard } from './nuevo-usuario.guard';

describe('NuevoUsuarioGuard', () => {
  let guard: NuevoUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NuevoUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
