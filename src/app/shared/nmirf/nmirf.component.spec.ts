import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmirfComponent } from './nmirf.component';

describe('NmirfComponent', () => {
  let component: NmirfComponent;
  let fixture: ComponentFixture<NmirfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NmirfComponent]
    });
    fixture = TestBed.createComponent(NmirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
