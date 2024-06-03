import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiuyComponent } from './poiuy.component';

describe('PoiuyComponent', () => {
  let component: PoiuyComponent;
  let fixture: ComponentFixture<PoiuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoiuyComponent]
    });
    fixture = TestBed.createComponent(PoiuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
