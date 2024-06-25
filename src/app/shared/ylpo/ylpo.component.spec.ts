import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YLPOComponent } from './ylpo.component';

describe('YLPOComponent', () => {
  let component: YLPOComponent;
  let fixture: ComponentFixture<YLPOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YLPOComponent]
    });
    fixture = TestBed.createComponent(YLPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
