import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {
  
  clienteForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  nombre: string = "David";
  cliente = {
    nombre: "David",
    email: "dccorialfa@gmail.com",
  }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group(
      {
        nombre: [
          '', 
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ])
        ],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.email,
          ])
        ],
        telefono: [
          '',
          Validators.compose([
            Validators.required,
          ])
        ],
        ingreso: [
          '0',
          Validators.compose([
            Validators.required,
            Validators.min(0),
          ])
        ],
        nacimiento: [
          '',
          Validators.required,
        ]
      }
    );
  }

  submit() {
    console.log(this.nombre);
    this.nombre = "Other";
  }

}
