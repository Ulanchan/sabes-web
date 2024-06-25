import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmokComponent } from './vmok.component';

describe('VmokComponent', () => {
  let component: VmokComponent;
  let fixture: ComponentFixture<VmokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VmokComponent]
    });
    fixture = TestBed.createComponent(VmokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
