import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsjbComponent } from './isjb.component';

describe('IsjbComponent', () => {
  let component: IsjbComponent;
  let fixture: ComponentFixture<IsjbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsjbComponent]
    });
    fixture = TestBed.createComponent(IsjbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
