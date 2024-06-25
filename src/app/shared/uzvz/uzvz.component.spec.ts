import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzvzComponent } from './uzvz.component';

describe('UzvzComponent', () => {
  let component: UzvzComponent;
  let fixture: ComponentFixture<UzvzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UzvzComponent]
    });
    fixture = TestBed.createComponent(UzvzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
