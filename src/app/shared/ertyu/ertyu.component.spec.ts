import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErtyuComponent } from './ertyu.component';

describe('ErtyuComponent', () => {
  let component: ErtyuComponent;
  let fixture: ComponentFixture<ErtyuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErtyuComponent]
    });
    fixture = TestBed.createComponent(ErtyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
