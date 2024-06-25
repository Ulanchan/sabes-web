import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoriComponent } from './kori.component';

describe('KoriComponent', () => {
  let component: KoriComponent;
  let fixture: ComponentFixture<KoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KoriComponent]
    });
    fixture = TestBed.createComponent(KoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
