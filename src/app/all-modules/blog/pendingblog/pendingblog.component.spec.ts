import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingblogComponent } from './pendingblog.component';

describe('PendingblogComponent', () => {
  let component: PendingblogComponent;
  let fixture: ComponentFixture<PendingblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
