import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInquilinosComponent } from './add-inquilinos.component';

describe('AddInquilinosComponent', () => {
  let component: AddInquilinosComponent;
  let fixture: ComponentFixture<AddInquilinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInquilinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInquilinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
