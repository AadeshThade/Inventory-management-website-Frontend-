import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawaddComponent } from './rawadd.component';

describe('RawaddComponent', () => {
  let component: RawaddComponent;
  let fixture: ComponentFixture<RawaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawaddComponent]
    });
    fixture = TestBed.createComponent(RawaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
