import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpABorrarComponent } from './cmp-a-borrar.component';

describe('CmpABorrarComponent', () => {
  let component: CmpABorrarComponent;
  let fixture: ComponentFixture<CmpABorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpABorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpABorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
