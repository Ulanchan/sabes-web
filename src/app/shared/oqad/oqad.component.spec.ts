import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQADComponent } from './oqad.component';

describe('OQADComponent', () => {
  let component: OQADComponent;
  let fixture: ComponentFixture<OQADComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OQADComponent]
    });
    fixture = TestBed.createComponent(OQADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
