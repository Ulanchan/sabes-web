import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QazwsComponent } from './qazws.component';

describe('QazwsComponent', () => {
  let component: QazwsComponent;
  let fixture: ComponentFixture<QazwsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QazwsComponent]
    });
    fixture = TestBed.createComponent(QazwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
