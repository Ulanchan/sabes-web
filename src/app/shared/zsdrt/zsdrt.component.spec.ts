import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZsdrtComponent } from './zsdrt.component';

describe('ZsdrtComponent', () => {
  let component: ZsdrtComponent;
  let fixture: ComponentFixture<ZsdrtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZsdrtComponent]
    });
    fixture = TestBed.createComponent(ZsdrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
