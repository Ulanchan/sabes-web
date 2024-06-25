import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbrkComponent } from './zbrk.component';

describe('ZbrkComponent', () => {
  let component: ZbrkComponent;
  let fixture: ComponentFixture<ZbrkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZbrkComponent]
    });
    fixture = TestBed.createComponent(ZbrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
