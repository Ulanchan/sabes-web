import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdfghComponent } from './xdfgh.component';

describe('XdfghComponent', () => {
  let component: XdfghComponent;
  let fixture: ComponentFixture<XdfghComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XdfghComponent]
    });
    fixture = TestBed.createComponent(XdfghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
