import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpObservablesComponent } from './cmp-observables.component';

describe('CmpObservablesComponent', () => {
  let component: CmpObservablesComponent;
  let fixture: ComponentFixture<CmpObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
