import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LnmkoComponent } from './lnmko.component';

describe('LnmkoComponent', () => {
  let component: LnmkoComponent;
  let fixture: ComponentFixture<LnmkoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LnmkoComponent]
    });
    fixture = TestBed.createComponent(LnmkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
