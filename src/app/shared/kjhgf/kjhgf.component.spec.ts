import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjhgfComponent } from './kjhgf.component';

describe('KjhgfComponent', () => {
  let component: KjhgfComponent;
  let fixture: ComponentFixture<KjhgfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KjhgfComponent]
    });
    fixture = TestBed.createComponent(KjhgfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
