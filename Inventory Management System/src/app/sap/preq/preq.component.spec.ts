import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreqComponent } from './preq.component';

describe('PreqComponent', () => {
  let component: PreqComponent;
  let fixture: ComponentFixture<PreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreqComponent]
    });
    fixture = TestBed.createComponent(PreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
