import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmihComponent } from './amih.component';

describe('AmihComponent', () => {
  let component: AmihComponent;
  let fixture: ComponentFixture<AmihComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmihComponent]
    });
    fixture = TestBed.createComponent(AmihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
