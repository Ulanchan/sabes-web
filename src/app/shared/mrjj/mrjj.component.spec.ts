import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrjjComponent } from './mrjj.component';

describe('MrjjComponent', () => {
  let component: MrjjComponent;
  let fixture: ComponentFixture<MrjjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrjjComponent]
    });
    fixture = TestBed.createComponent(MrjjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
