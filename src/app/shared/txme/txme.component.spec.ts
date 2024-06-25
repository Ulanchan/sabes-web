import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxmeComponent } from './txme.component';

describe('TxmeComponent', () => {
  let component: TxmeComponent;
  let fixture: ComponentFixture<TxmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TxmeComponent]
    });
    fixture = TestBed.createComponent(TxmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
