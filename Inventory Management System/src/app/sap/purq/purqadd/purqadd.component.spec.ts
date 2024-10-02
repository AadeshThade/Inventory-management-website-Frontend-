import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurqaddComponent } from './purqadd.component';

describe('PurqaddComponent', () => {
  let component: PurqaddComponent;
  let fixture: ComponentFixture<PurqaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurqaddComponent]
    });
    fixture = TestBed.createComponent(PurqaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
