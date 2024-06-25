import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JULGComponent } from './julg.component';

describe('JULGComponent', () => {
  let component: JULGComponent;
  let fixture: ComponentFixture<JULGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JULGComponent]
    });
    fixture = TestBed.createComponent(JULGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
