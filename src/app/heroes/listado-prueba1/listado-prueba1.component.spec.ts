import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrueba1Component } from './listado-prueba1.component';

describe('ListadoPrueba1Component', () => {
  let component: ListadoPrueba1Component;
  let fixture: ComponentFixture<ListadoPrueba1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPrueba1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPrueba1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
