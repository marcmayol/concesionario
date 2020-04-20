import { TestBed } from '@angular/core/testing';

import { UserSevice } from './user.service';

describe('UserSeviceService', () => {
  let service: UserSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
