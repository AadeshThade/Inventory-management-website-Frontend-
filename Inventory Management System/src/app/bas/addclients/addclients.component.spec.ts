import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclientsComponent } from './addclients.component';

describe('AddclientsComponent', () => {
  let component: AddclientsComponent;
  let fixture: ComponentFixture<AddclientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddclientsComponent]
    });
    fixture = TestBed.createComponent(AddclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
