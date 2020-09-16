import { TestBed } from '@angular/core/testing';

import { POCLibService } from './poclib.service';

describe('POCLibService', () => {
  let service: POCLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(POCLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
