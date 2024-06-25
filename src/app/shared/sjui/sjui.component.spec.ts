import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SjuiComponent } from './sjui.component';

describe('SjuiComponent', () => {
  let component: SjuiComponent;
  let fixture: ComponentFixture<SjuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SjuiComponent]
    });
    fixture = TestBed.createComponent(SjuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
