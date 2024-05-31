import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZxcvbComponent } from './zxcvb.component';

describe('ZxcvbComponent', () => {
  let component: ZxcvbComponent;
  let fixture: ComponentFixture<ZxcvbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZxcvbComponent]
    });
    fixture = TestBed.createComponent(ZxcvbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
