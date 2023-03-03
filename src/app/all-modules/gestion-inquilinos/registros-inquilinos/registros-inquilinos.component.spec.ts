import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosInquilinosComponent } from './registros-inquilinos.component';

describe('RegistrosInquilinosComponent', () => {
  let component: RegistrosInquilinosComponent;
  let fixture: ComponentFixture<RegistrosInquilinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosInquilinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosInquilinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
