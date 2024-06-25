import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyvgComponent } from './vyvg.component';

describe('VyvgComponent', () => {
  let component: VyvgComponent;
  let fixture: ComponentFixture<VyvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VyvgComponent]
    });
    fixture = TestBed.createComponent(VyvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
