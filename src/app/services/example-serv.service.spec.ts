import { TestBed } from '@angular/core/testing';

import { ExampleServService } from './example-serv.service';

describe('ExampleServService', () => {
  let service: ExampleServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
