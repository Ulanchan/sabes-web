import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDQWComponent } from './vdqw.component';

describe('VDQWComponent', () => {
  let component: VDQWComponent;
  let fixture: ComponentFixture<VDQWComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VDQWComponent]
    });
    fixture = TestBed.createComponent(VDQWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
