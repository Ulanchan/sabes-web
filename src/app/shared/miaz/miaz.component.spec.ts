import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiazComponent } from './miaz.component';

describe('MiazComponent', () => {
  let component: MiazComponent;
  let fixture: ComponentFixture<MiazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiazComponent]
    });
    fixture = TestBed.createComponent(MiazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
