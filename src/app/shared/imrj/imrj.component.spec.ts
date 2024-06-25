import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImrjComponent } from './imrj.component';

describe('ImrjComponent', () => {
  let component: ImrjComponent;
  let fixture: ComponentFixture<ImrjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImrjComponent]
    });
    fixture = TestBed.createComponent(ImrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
