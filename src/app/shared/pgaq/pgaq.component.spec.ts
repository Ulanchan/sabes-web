import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaqComponent } from './pgaq.component';

describe('PgaqComponent', () => {
  let component: PgaqComponent;
  let fixture: ComponentFixture<PgaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgaqComponent]
    });
    fixture = TestBed.createComponent(PgaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
