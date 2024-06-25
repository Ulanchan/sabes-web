import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UclrComponent } from './uclr.component';

describe('UclrComponent', () => {
  let component: UclrComponent;
  let fixture: ComponentFixture<UclrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UclrComponent]
    });
    fixture = TestBed.createComponent(UclrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
