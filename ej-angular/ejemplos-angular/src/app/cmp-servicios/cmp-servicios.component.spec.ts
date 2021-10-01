import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpServiciosComponent } from './cmp-servicios.component';

describe('CmpServiciosComponent', () => {
  let component: CmpServiciosComponent;
  let fixture: ComponentFixture<CmpServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
