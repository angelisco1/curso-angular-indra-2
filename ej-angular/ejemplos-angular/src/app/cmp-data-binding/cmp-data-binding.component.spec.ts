import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataBindingComponent } from './cmp-data-binding.component';

describe('CmpDataBindingComponent', () => {
  let component: CmpDataBindingComponent;
  let fixture: ComponentFixture<CmpDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
