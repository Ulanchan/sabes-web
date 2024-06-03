import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerzxComponent } from './werzx.component';

describe('WerzxComponent', () => {
  let component: WerzxComponent;
  let fixture: ComponentFixture<WerzxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WerzxComponent]
    });
    fixture = TestBed.createComponent(WerzxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
