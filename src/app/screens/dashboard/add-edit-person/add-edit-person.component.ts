import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-person',
  templateUrl: './add-edit-person.component.html',
  styleUrls: ['./add-edit-person.component.css'],
})
export class AddEditPersonComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({

    });
  }
}
