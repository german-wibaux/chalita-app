import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLogoComponent } from './production-logo.component';

describe('ProductionLogoComponent', () => {
  let component: ProductionLogoComponent;
  let fixture: ComponentFixture<ProductionLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
