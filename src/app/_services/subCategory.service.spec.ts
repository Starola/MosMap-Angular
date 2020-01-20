/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubCategoryService } from './subCategory.service';

describe('Service: SubCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoryService]
    });
  });

  it('should ...', inject([SubCategoryService], (service: SubCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
