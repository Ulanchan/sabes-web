import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfdoComponent } from './nfdo.component';

describe('NfdoComponent', () => {
  let component: NfdoComponent;
  let fixture: ComponentFixture<NfdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NfdoComponent]
    });
    fixture = TestBed.createComponent(NfdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
