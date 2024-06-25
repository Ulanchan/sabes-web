import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbvsComponent } from './vbvs.component';

describe('VbvsComponent', () => {
  let component: VbvsComponent;
  let fixture: ComponentFixture<VbvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VbvsComponent]
    });
    fixture = TestBed.createComponent(VbvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
