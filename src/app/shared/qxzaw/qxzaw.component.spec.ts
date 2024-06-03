import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QxzawComponent } from './qxzaw.component';

describe('QxzawComponent', () => {
  let component: QxzawComponent;
  let fixture: ComponentFixture<QxzawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QxzawComponent]
    });
    fixture = TestBed.createComponent(QxzawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
