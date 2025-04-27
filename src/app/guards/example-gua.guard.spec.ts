import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { exampleGuaGuard } from './example-gua.guard';

describe('exampleGuaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exampleGuaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
