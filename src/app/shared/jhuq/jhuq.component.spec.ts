import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JhuqComponent } from './jhuq.component';

describe('JhuqComponent', () => {
  let component: JhuqComponent;
  let fixture: ComponentFixture<JhuqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JhuqComponent]
    });
    fixture = TestBed.createComponent(JhuqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
