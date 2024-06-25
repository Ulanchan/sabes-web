import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqiqComponent } from './cqiq.component';

describe('CqiqComponent', () => {
  let component: CqiqComponent;
  let fixture: ComponentFixture<CqiqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CqiqComponent]
    });
    fixture = TestBed.createComponent(CqiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
