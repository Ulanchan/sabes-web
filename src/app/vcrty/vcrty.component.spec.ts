import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcrtyComponent } from './vcrty.component';

describe('VcrtyComponent', () => {
  let component: VcrtyComponent;
  let fixture: ComponentFixture<VcrtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VcrtyComponent]
    });
    fixture = TestBed.createComponent(VcrtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
