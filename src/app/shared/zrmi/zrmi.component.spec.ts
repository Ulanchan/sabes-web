import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZrmiComponent } from './zrmi.component';

describe('ZrmiComponent', () => {
  let component: ZrmiComponent;
  let fixture: ComponentFixture<ZrmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZrmiComponent]
    });
    fixture = TestBed.createComponent(ZrmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
