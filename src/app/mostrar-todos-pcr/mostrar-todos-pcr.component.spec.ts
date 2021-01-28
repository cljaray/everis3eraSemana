import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTodosPcrComponent } from './mostrar-todos-pcr.component';

describe('MostrarTodosPcrComponent', () => {
  let component: MostrarTodosPcrComponent;
  let fixture: ComponentFixture<MostrarTodosPcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTodosPcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTodosPcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
