import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VczmComponent } from './vczm.component';

describe('VczmComponent', () => {
  let component: VczmComponent;
  let fixture: ComponentFixture<VczmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VczmComponent]
    });
    fixture = TestBed.createComponent(VczmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
