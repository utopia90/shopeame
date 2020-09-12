import { TestBed } from '@angular/core/testing';

import { ProductsLocalServiceService } from './products-local-service.service';

describe('ProductsLocalServiceService', () => {
  let service: ProductsLocalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLocalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
