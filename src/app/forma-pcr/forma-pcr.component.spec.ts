import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPCRComponent } from './forma-pcr.component';

describe('FormaPCRComponent', () => {
  let component: FormaPCRComponent;
  let fixture: ComponentFixture<FormaPCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaPCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
