import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrawComponent } from './addraw.component';

describe('AddrawComponent', () => {
  let component: AddrawComponent;
  let fixture: ComponentFixture<AddrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddrawComponent]
    });
    fixture = TestBed.createComponent(AddrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
