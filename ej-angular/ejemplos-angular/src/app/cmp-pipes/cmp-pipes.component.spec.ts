import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPipesComponent } from './cmp-pipes.component';

describe('CmpPipesComponent', () => {
  let component: CmpPipesComponent;
  let fixture: ComponentFixture<CmpPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
