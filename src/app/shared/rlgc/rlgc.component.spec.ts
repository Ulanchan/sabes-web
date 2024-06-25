import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlgcComponent } from './rlgc.component';

describe('RlgcComponent', () => {
  let component: RlgcComponent;
  let fixture: ComponentFixture<RlgcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RlgcComponent]
    });
    fixture = TestBed.createComponent(RlgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
