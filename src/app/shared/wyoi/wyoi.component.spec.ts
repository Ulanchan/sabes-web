import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyoiComponent } from './wyoi.component';

describe('WyoiComponent', () => {
  let component: WyoiComponent;
  let fixture: ComponentFixture<WyoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WyoiComponent]
    });
    fixture = TestBed.createComponent(WyoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
