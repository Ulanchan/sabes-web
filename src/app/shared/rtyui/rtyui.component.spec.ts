import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtyuiComponent } from './rtyui.component';

describe('RtyuiComponent', () => {
  let component: RtyuiComponent;
  let fixture: ComponentFixture<RtyuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtyuiComponent]
    });
    fixture = TestBed.createComponent(RtyuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
