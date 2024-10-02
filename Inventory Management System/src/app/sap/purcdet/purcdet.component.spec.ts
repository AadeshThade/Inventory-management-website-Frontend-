import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcdetComponent } from './purcdet.component';

describe('PurcdetComponent', () => {
  let component: PurcdetComponent;
  let fixture: ComponentFixture<PurcdetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurcdetComponent]
    });
    fixture = TestBed.createComponent(PurcdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
