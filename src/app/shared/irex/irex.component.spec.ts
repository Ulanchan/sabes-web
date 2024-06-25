import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrexComponent } from './irex.component';

describe('IrexComponent', () => {
  let component: IrexComponent;
  let fixture: ComponentFixture<IrexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrexComponent]
    });
    fixture = TestBed.createComponent(IrexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
