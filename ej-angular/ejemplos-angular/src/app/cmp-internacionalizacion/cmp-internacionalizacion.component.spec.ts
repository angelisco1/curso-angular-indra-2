import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpInternacionalizacionComponent } from './cmp-internacionalizacion.component';

describe('CmpInternacionalizacionComponent', () => {
  let component: CmpInternacionalizacionComponent;
  let fixture: ComponentFixture<CmpInternacionalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpInternacionalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpInternacionalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
