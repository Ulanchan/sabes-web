import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdruComponent } from './cdru.component';

describe('CdruComponent', () => {
  let component: CdruComponent;
  let fixture: ComponentFixture<CdruComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdruComponent]
    });
    fixture = TestBed.createComponent(CdruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
