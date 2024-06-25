import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxinComponent } from './cxin.component';

describe('CxinComponent', () => {
  let component: CxinComponent;
  let fixture: ComponentFixture<CxinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CxinComponent]
    });
    fixture = TestBed.createComponent(CxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
