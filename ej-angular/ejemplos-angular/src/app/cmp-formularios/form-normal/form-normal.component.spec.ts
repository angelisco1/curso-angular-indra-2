import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNormalComponent } from './form-normal.component';

describe('FormNormalComponent', () => {
  let component: FormNormalComponent;
  let fixture: ComponentFixture<FormNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
