import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OygaComponent } from './oyga.component';

describe('OygaComponent', () => {
  let component: OygaComponent;
  let fixture: ComponentFixture<OygaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OygaComponent]
    });
    fixture = TestBed.createComponent(OygaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
