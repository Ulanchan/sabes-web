import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyxwvComponent } from './zyxwv.component';

describe('ZyxwvComponent', () => {
  let component: ZyxwvComponent;
  let fixture: ComponentFixture<ZyxwvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZyxwvComponent]
    });
    fixture = TestBed.createComponent(ZyxwvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
