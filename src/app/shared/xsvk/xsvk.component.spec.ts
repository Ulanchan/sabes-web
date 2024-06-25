import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XsvkComponent } from './xsvk.component';

describe('XsvkComponent', () => {
  let component: XsvkComponent;
  let fixture: ComponentFixture<XsvkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XsvkComponent]
    });
    fixture = TestBed.createComponent(XsvkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
