import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhdiComponent } from './ghdi.component';

describe('GhdiComponent', () => {
  let component: GhdiComponent;
  let fixture: ComponentFixture<GhdiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhdiComponent]
    });
    fixture = TestBed.createComponent(GhdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
