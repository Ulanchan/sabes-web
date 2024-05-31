import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuiopComponent } from './yuiop.component';

describe('YuiopComponent', () => {
  let component: YuiopComponent;
  let fixture: ComponentFixture<YuiopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YuiopComponent]
    });
    fixture = TestBed.createComponent(YuiopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
