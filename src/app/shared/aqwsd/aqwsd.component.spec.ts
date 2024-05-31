import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqwsdComponent } from './aqwsd.component';

describe('AqwsdComponent', () => {
  let component: AqwsdComponent;
  let fixture: ComponentFixture<AqwsdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AqwsdComponent]
    });
    fixture = TestBed.createComponent(AqwsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
