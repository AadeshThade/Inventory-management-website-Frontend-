import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurqComponent } from './purq.component';

describe('PurqComponent', () => {
  let component: PurqComponent;
  let fixture: ComponentFixture<PurqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurqComponent]
    });
    fixture = TestBed.createComponent(PurqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
