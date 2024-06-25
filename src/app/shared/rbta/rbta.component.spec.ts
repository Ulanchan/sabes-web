import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtaComponent } from './rbta.component';

describe('RbtaComponent', () => {
  let component: RbtaComponent;
  let fixture: ComponentFixture<RbtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RbtaComponent]
    });
    fixture = TestBed.createComponent(RbtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
