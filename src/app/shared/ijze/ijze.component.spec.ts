import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IjzeComponent } from './ijze.component';

describe('IjzeComponent', () => {
  let component: IjzeComponent;
  let fixture: ComponentFixture<IjzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IjzeComponent]
    });
    fixture = TestBed.createComponent(IjzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
