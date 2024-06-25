import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YcxdComponent } from './ycxd.component';

describe('YcxdComponent', () => {
  let component: YcxdComponent;
  let fixture: ComponentFixture<YcxdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YcxdComponent]
    });
    fixture = TestBed.createComponent(YcxdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
