import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRutComponent } from './buscar-rut.component';

describe('BuscarRutComponent', () => {
  let component: BuscarRutComponent;
  let fixture: ComponentFixture<BuscarRutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
