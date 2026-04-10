import { TestBed } from '@angular/core/testing';

import { CommentservService } from './commentserv.service';

describe('CommentservService', () => {
  let service: CommentservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
