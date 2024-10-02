import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdlineComponent } from './prodline.component';

describe('ProdlineComponent', () => {
  let component: ProdlineComponent;
  let fixture: ComponentFixture<ProdlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdlineComponent]
    });
    fixture = TestBed.createComponent(ProdlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
