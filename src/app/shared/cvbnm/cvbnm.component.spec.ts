import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvbnmComponent } from './cvbnm.component';

describe('CvbnmComponent', () => {
  let component: CvbnmComponent;
  let fixture: ComponentFixture<CvbnmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvbnmComponent]
    });
    fixture = TestBed.createComponent(CvbnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
