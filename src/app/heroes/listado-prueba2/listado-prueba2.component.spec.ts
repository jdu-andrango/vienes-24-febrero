import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrueba2Component } from './listado-prueba2.component';

describe('ListadoPrueba2Component', () => {
  let component: ListadoPrueba2Component;
  let fixture: ComponentFixture<ListadoPrueba2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPrueba2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPrueba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
