import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KplumComponent } from './kplum.component';

describe('KplumComponent', () => {
  let component: KplumComponent;
  let fixture: ComponentFixture<KplumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KplumComponent]
    });
    fixture = TestBed.createComponent(KplumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
