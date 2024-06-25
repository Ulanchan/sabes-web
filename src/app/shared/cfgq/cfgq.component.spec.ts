import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgqComponent } from './cfgq.component';

describe('CfgqComponent', () => {
  let component: CfgqComponent;
  let fixture: ComponentFixture<CfgqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CfgqComponent]
    });
    fixture = TestBed.createComponent(CfgqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
