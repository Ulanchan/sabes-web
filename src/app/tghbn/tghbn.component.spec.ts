import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TghbnComponent } from './tghbn.component';

describe('TghbnComponent', () => {
  let component: TghbnComponent;
  let fixture: ComponentFixture<TghbnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TghbnComponent]
    });
    fixture = TestBed.createComponent(TghbnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
