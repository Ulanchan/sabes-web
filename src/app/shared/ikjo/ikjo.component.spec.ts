import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkjoComponent } from './ikjo.component';

describe('IkjoComponent', () => {
  let component: IkjoComponent;
  let fixture: ComponentFixture<IkjoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IkjoComponent]
    });
    fixture = TestBed.createComponent(IkjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
