import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreqaddComponent } from './preqadd.component';

describe('PreqaddComponent', () => {
  let component: PreqaddComponent;
  let fixture: ComponentFixture<PreqaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreqaddComponent]
    });
    fixture = TestBed.createComponent(PreqaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
