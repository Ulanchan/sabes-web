import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzkzComponent } from './zzkz.component';

describe('ZzkzComponent', () => {
  let component: ZzkzComponent;
  let fixture: ComponentFixture<ZzkzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZzkzComponent]
    });
    fixture = TestBed.createComponent(ZzkzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
