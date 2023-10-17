import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersonComponent } from './add-edit-person.component';

describe('AddEditPersonComponent', () => {
  let component: AddEditPersonComponent;
  let fixture: ComponentFixture<AddEditPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPersonComponent]
    });
    fixture = TestBed.createComponent(AddEditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
