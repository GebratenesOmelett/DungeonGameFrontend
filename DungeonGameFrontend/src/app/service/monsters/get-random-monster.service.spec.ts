import { TestBed } from '@angular/core/testing';

import { GetRandomMonsterService } from './get-random-monster.service';

describe('GetRandomMonsterService', () => {
  let service: GetRandomMonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomMonsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
