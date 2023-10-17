import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPersonsComponent } from './admin-edit-persons.component';

describe('AdminEditPersonsComponent', () => {
  let component: AdminEditPersonsComponent;
  let fixture: ComponentFixture<AdminEditPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditPersonsComponent]
    });
    fixture = TestBed.createComponent(AdminEditPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
