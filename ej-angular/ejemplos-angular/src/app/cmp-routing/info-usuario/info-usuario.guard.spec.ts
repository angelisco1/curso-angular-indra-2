import { TestBed } from '@angular/core/testing';

import { InfoUsuarioGuard } from './info-usuario.guard';

describe('InfoUsuarioGuard', () => {
  let guard: InfoUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfoUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
