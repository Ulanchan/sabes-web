import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EobgComponent } from './eobg.component';

describe('EobgComponent', () => {
  let component: EobgComponent;
  let fixture: ComponentFixture<EobgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EobgComponent]
    });
    fixture = TestBed.createComponent(EobgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
