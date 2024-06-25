import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbgComponent } from './isbg.component';

describe('IsbgComponent', () => {
  let component: IsbgComponent;
  let fixture: ComponentFixture<IsbgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsbgComponent]
    });
    fixture = TestBed.createComponent(IsbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
