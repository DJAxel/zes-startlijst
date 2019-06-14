import { TestBed, inject } from '@angular/core/testing';

import { PilotService } from './pilot.service';

describe('PilotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotService]
    });
  });

  it('should be created', inject([PilotService], (service: PilotService) => {
    expect(service).toBeTruthy();
  }));
});
