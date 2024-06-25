import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcfvComponent } from './qcfv.component';

describe('QcfvComponent', () => {
  let component: QcfvComponent;
  let fixture: ComponentFixture<QcfvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcfvComponent]
    });
    fixture = TestBed.createComponent(QcfvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
