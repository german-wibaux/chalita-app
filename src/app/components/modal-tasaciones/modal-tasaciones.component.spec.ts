import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTasacionesComponent } from './modal-tasaciones.component';

describe('ModalTasacionesComponent', () => {
  let component: ModalTasacionesComponent;
  let fixture: ComponentFixture<ModalTasacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTasacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTasacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
