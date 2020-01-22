import { TestBed } from '@angular/core/testing';

import { GeoJSONprocessingService } from './geo-jsonprocessing.service';

describe('GeoJSONprocessingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoJSONprocessingService = TestBed.get(GeoJSONprocessingService);
    expect(service).toBeTruthy();
  });
});
