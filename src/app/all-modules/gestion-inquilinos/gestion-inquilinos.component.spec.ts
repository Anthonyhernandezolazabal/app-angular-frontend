import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInquilinosComponent } from './gestion-inquilinos.component';

describe('GestionInquilinosComponent', () => {
  let component: GestionInquilinosComponent;
  let fixture: ComponentFixture<GestionInquilinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionInquilinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionInquilinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
