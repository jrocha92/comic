import { TestBed } from '@angular/core/testing';

import { ComicInfoService } from './comic-info.service';

describe('ComicInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicInfoService = TestBed.get(ComicInfoService);
    expect(service).toBeTruthy();
  });
});
