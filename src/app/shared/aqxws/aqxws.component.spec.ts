import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqxwsComponent } from './aqxws.component';

describe('AqxwsComponent', () => {
  let component: AqxwsComponent;
  let fixture: ComponentFixture<AqxwsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AqxwsComponent]
    });
    fixture = TestBed.createComponent(AqxwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
