import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpFormulariosComponent } from './cmp-formularios.component';

describe('CmpFormulariosComponent', () => {
  let component: CmpFormulariosComponent;
  let fixture: ComponentFixture<CmpFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
