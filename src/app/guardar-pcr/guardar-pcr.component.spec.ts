import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarPCRComponent } from './guardar-pcr.component';

describe('GuardarPCRComponent', () => {
  let component: GuardarPCRComponent;
  let fixture: ComponentFixture<GuardarPCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarPCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarPCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
