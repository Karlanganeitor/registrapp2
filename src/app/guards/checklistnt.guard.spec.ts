import { TestBed } from '@angular/core/testing';

import { ChecklistntGuard } from './checklistnt.guard';

describe('ChecklistntGuard', () => {
  let guard: ChecklistntGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChecklistntGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
