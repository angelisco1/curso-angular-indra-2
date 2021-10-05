import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpModulosComponent } from './cmp-modulos.component';

describe('CmpModulosComponent', () => {
  let component: CmpModulosComponent;
  let fixture: ComponentFixture<CmpModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
