import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';

describe('SidbareService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
