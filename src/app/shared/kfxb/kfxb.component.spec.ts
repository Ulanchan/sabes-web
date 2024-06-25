import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfxbComponent } from './kfxb.component';

describe('KfxbComponent', () => {
  let component: KfxbComponent;
  let fixture: ComponentFixture<KfxbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KfxbComponent]
    });
    fixture = TestBed.createComponent(KfxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
