import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgbvcComponent } from './hgbvc.component';

describe('HgbvcComponent', () => {
  let component: HgbvcComponent;
  let fixture: ComponentFixture<HgbvcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HgbvcComponent]
    });
    fixture = TestBed.createComponent(HgbvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
