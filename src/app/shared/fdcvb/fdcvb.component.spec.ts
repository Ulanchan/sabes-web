import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdcvbComponent } from './fdcvb.component';

describe('FdcvbComponent', () => {
  let component: FdcvbComponent;
  let fixture: ComponentFixture<FdcvbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FdcvbComponent]
    });
    fixture = TestBed.createComponent(FdcvbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
