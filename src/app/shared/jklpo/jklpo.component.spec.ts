import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JklpoComponent } from './jklpo.component';

describe('JklpoComponent', () => {
  let component: JklpoComponent;
  let fixture: ComponentFixture<JklpoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JklpoComponent]
    });
    fixture = TestBed.createComponent(JklpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
