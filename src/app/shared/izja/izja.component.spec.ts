import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzjaComponent } from './izja.component';

describe('IzjaComponent', () => {
  let component: IzjaComponent;
  let fixture: ComponentFixture<IzjaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IzjaComponent]
    });
    fixture = TestBed.createComponent(IzjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
