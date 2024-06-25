import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XslhComponent } from './xslh.component';

describe('XslhComponent', () => {
  let component: XslhComponent;
  let fixture: ComponentFixture<XslhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XslhComponent]
    });
    fixture = TestBed.createComponent(XslhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
