import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjmopComponent } from './kjmop.component';

describe('KjmopComponent', () => {
  let component: KjmopComponent;
  let fixture: ComponentFixture<KjmopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KjmopComponent]
    });
    fixture = TestBed.createComponent(KjmopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
