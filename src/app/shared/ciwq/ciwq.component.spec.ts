import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiwqComponent } from './ciwq.component';

describe('CiwqComponent', () => {
  let component: CiwqComponent;
  let fixture: ComponentFixture<CiwqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiwqComponent]
    });
    fixture = TestBed.createComponent(CiwqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
