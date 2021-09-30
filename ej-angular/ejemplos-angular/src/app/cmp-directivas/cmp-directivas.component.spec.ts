import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDirectivasComponent } from './cmp-directivas.component';

describe('CmpDirectivasComponent', () => {
  let component: CmpDirectivasComponent;
  let fixture: ComponentFixture<CmpDirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpDirectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
