import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDinamicoComponent } from './cv-dinamico.component';

describe('CvDinamicoComponent', () => {
  let component: CvDinamicoComponent;
  let fixture: ComponentFixture<CvDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
