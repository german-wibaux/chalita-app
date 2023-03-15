import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlquileresComponent } from './alquileres.component';

describe('AlquileresComponent', () => {
  let component: AlquileresComponent;
  let fixture: ComponentFixture<AlquileresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
