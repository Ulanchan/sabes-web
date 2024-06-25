import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmcoComponent } from './wmco.component';

describe('WmcoComponent', () => {
  let component: WmcoComponent;
  let fixture: ComponentFixture<WmcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WmcoComponent]
    });
    fixture = TestBed.createComponent(WmcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
