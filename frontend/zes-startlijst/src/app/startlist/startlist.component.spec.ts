import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartlistComponent } from './startlist.component';

describe('StartlistComponent', () => {
  let component: StartlistComponent;
  let fixture: ComponentFixture<StartlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
