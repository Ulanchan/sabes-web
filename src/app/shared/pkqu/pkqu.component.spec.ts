import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PKQUComponent } from './pkqu.component';

describe('PKQUComponent', () => {
  let component: PKQUComponent;
  let fixture: ComponentFixture<PKQUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PKQUComponent]
    });
    fixture = TestBed.createComponent(PKQUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
