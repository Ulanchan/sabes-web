import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvkoComponent } from './yvko.component';

describe('YvkoComponent', () => {
  let component: YvkoComponent;
  let fixture: ComponentFixture<YvkoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YvkoComponent]
    });
    fixture = TestBed.createComponent(YvkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
