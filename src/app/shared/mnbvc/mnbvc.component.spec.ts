import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnbvcComponent } from './mnbvc.component';

describe('MnbvcComponent', () => {
  let component: MnbvcComponent;
  let fixture: ComponentFixture<MnbvcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MnbvcComponent]
    });
    fixture = TestBed.createComponent(MnbvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
