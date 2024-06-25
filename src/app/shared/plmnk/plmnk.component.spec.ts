import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlmnkComponent } from './plmnk.component';

describe('PlmnkComponent', () => {
  let component: PlmnkComponent;
  let fixture: ComponentFixture<PlmnkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlmnkComponent]
    });
    fixture = TestBed.createComponent(PlmnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
