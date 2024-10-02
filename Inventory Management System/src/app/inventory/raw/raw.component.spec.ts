import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawComponent } from './raw.component';

describe('RawComponent', () => {
  let component: RawComponent;
  let fixture: ComponentFixture<RawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawComponent]
    });
    fixture = TestBed.createComponent(RawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
