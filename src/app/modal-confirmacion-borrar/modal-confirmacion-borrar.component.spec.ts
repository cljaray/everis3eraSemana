import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacionBorrarComponent } from './modal-confirmacion-borrar.component';

describe('ModalConfirmacionBorrarComponent', () => {
  let component: ModalConfirmacionBorrarComponent;
  let fixture: ComponentFixture<ModalConfirmacionBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmacionBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmacionBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
