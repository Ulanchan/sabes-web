import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedcComponent } from './fedc.component';

describe('FedcComponent', () => {
  let component: FedcComponent;
  let fixture: ComponentFixture<FedcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FedcComponent]
    });
    fixture = TestBed.createComponent(FedcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
