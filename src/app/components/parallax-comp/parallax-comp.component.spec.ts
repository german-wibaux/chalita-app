import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxCompComponent } from './parallax-comp.component';

describe('ParallaxCompComponent', () => {
  let component: ParallaxCompComponent;
  let fixture: ComponentFixture<ParallaxCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
