import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurdetaddComponent } from './purdetadd.component';

describe('PurdetaddComponent', () => {
  let component: PurdetaddComponent;
  let fixture: ComponentFixture<PurdetaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurdetaddComponent]
    });
    fixture = TestBed.createComponent(PurdetaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
