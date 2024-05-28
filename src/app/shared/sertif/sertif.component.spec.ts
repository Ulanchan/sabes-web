import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SertifComponent } from './sertif.component';

describe('SertifComponent', () => {
  let component: SertifComponent;
  let fixture: ComponentFixture<SertifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SertifComponent]
    });
    fixture = TestBed.createComponent(SertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
