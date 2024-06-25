import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlujComponent } from './nluj.component';

describe('NlujComponent', () => {
  let component: NlujComponent;
  let fixture: ComponentFixture<NlujComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NlujComponent]
    });
    fixture = TestBed.createComponent(NlujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
