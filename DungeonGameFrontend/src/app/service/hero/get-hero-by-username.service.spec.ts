import { TestBed } from '@angular/core/testing';

import { GetHeroByUsernameService } from './get-hero-by-username.service';

describe('GetHeroByUsernameService', () => {
  let service: GetHeroByUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHeroByUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
