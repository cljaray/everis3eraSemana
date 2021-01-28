import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPcrComponent } from './actualizar-pcr.component';

describe('ActualizarPcrComponent', () => {
  let component: ActualizarPcrComponent;
  let fixture: ComponentFixture<ActualizarPcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
