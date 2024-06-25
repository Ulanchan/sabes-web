import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdrrComponent } from './idrr.component';

describe('IdrrComponent', () => {
  let component: IdrrComponent;
  let fixture: ComponentFixture<IdrrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdrrComponent]
    });
    fixture = TestBed.createComponent(IdrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
