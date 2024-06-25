import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueuComponent } from './mueu.component';

describe('MueuComponent', () => {
  let component: MueuComponent;
  let fixture: ComponentFixture<MueuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MueuComponent]
    });
    fixture = TestBed.createComponent(MueuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
