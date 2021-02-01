import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionExamenComponent } from './informacion-examen.component';

describe('InformacionExamenComponent', () => {
  let component: InformacionExamenComponent;
  let fixture: ComponentFixture<InformacionExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
