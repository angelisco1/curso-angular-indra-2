import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpHttpComponent } from './cmp-http.component';

describe('CmpHttpComponent', () => {
  let component: CmpHttpComponent;
  let fixture: ComponentFixture<CmpHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
