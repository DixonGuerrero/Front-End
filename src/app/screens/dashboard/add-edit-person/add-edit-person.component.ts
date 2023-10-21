import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-add-edit-person',
  templateUrl: './add-edit-person.component.html',
  styleUrls: ['./add-edit-person.component.css'],
})
export class AddEditPersonComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre_Usuario: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addPersona() {
    //console.log(this.form.value.nombre_Usuario)
    const persona: Person = {
      nombre_Usuario: this.form.value.nombre_Usuario,
      correo_Electronico: this.form.value.email,
      contrasenia:this.form.value.password
    }

    console.log(persona)
  }
}
