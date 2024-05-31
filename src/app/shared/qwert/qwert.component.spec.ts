import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QwertComponent } from './qwert.component';

describe('QwertComponent', () => {
  let component: QwertComponent;
  let fixture: ComponentFixture<QwertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QwertComponent]
    });
    fixture = TestBed.createComponent(QwertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
