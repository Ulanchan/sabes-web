import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtqhComponent } from './ptqh.component';

describe('PtqhComponent', () => {
  let component: PtqhComponent;
  let fixture: ComponentFixture<PtqhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtqhComponent]
    });
    fixture = TestBed.createComponent(PtqhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
