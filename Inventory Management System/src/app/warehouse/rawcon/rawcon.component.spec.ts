import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawconComponent } from './rawcon.component';

describe('RawconComponent', () => {
  let component: RawconComponent;
  let fixture: ComponentFixture<RawconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawconComponent]
    });
    fixture = TestBed.createComponent(RawconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
