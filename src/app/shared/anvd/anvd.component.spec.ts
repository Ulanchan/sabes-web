import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnvdComponent } from './anvd.component';

describe('AnvdComponent', () => {
  let component: AnvdComponent;
  let fixture: ComponentFixture<AnvdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnvdComponent]
    });
    fixture = TestBed.createComponent(AnvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
