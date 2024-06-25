import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZunzComponent } from './zunz.component';

describe('ZunzComponent', () => {
  let component: ZunzComponent;
  let fixture: ComponentFixture<ZunzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZunzComponent]
    });
    fixture = TestBed.createComponent(ZunzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
