import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakinComponent } from './anakin.component';

describe('AnakinComponent', () => {
  let component: AnakinComponent;
  let fixture: ComponentFixture<AnakinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnakinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
