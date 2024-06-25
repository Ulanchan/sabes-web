import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WqprComponent } from './wqpr.component';

describe('WqprComponent', () => {
  let component: WqprComponent;
  let fixture: ComponentFixture<WqprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WqprComponent]
    });
    fixture = TestBed.createComponent(WqprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
