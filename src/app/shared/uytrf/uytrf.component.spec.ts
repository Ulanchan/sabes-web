import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UytrfComponent } from './uytrf.component';

describe('UytrfComponent', () => {
  let component: UytrfComponent;
  let fixture: ComponentFixture<UytrfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UytrfComponent]
    });
    fixture = TestBed.createComponent(UytrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
