import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpComunicacionEntreComponentesComponent } from './cmp-comunicacion-entre-componentes.component';

describe('CmpComunicacionEntreComponentesComponent', () => {
  let component: CmpComunicacionEntreComponentesComponent;
  let fixture: ComponentFixture<CmpComunicacionEntreComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpComunicacionEntreComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpComunicacionEntreComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
