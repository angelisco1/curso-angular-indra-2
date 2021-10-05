import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpRoutingComponent } from './cmp-routing.component';

describe('CmpRoutingComponent', () => {
  let component: CmpRoutingComponent;
  let fixture: ComponentFixture<CmpRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
