import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LkjhgComponent } from './lkjhg.component';

describe('LkjhgComponent', () => {
  let component: LkjhgComponent;
  let fixture: ComponentFixture<LkjhgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LkjhgComponent]
    });
    fixture = TestBed.createComponent(LkjhgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
