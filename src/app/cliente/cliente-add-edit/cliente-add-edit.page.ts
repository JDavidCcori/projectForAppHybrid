import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})


export class ClienteAddEditPage implements OnInit {

  clienteForm!: FormGroup;
  hasErrors = false;
  errorsMessage!: string[];
  validationMessages = {
    nombre: [
      { type: 'required', message: 'Nombre es obligatório' },
      { type: 'minlength', message: 'Nombre debe tener por lo menos 3 caracteres' },
      { type: 'maxlength', message: 'Nombre debe tener a lo más 50 caracteres' }
    ],
    email: [
      { type: 'required', message: 'Email es obligatório' },
      { type: 'email', message: 'Email incorrecto'},
    ],
    telefono: [
      { type: 'required', message: 'El telefono es obliglatorio' },
      { type: 'min', message: 'El ingreso debe ser positivo' },
      { type: 'maxlength', message: 'Telefono debe tener a lo más 9 digitos' },
    ],
    ingreso: [
      { type: 'min', message: 'El ingreso debe ser positivo' }
    ],
    nacimiento: [
      { type: 'required', messege: 'El nacimiento es obligatorio'}
    ]
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nombre: [
        '',
        Validators.compose([
          Validators.required!,
          Validators.minLength(3),
          Validators.maxLength(50)
        ])],
      email: [
        '', Validators.compose([
          Validators.required,
          Validators.email
        ])],
      telefono: [
        '', 
        Validators.compose([
          Validators.required!, 
          Validators.maxLength(9)
        ])],
      ingreso: [
        '0',
        Validators.compose([
          Validators.required!,
          Validators.min(0)
        ])],
      nacimiento: [
        '',
        Validators.required!],
    });
  }
  nombre!: string;
  cliente = {
    nombre: "",
    email: "",
    ingreso: "",
    telefono: "",
    nacimiento: ""

  };


  submit() {
    this.errorsMessage = [];
    if (this.clienteForm.get('nombre')?.hasError('required')) {
      this.errorsMessage.push('Nombre es obligatorio');
    }
    if (this.clienteForm.get('email')?.hasError('required')) {
      this.errorsMessage.push('Email es obligatorio');
    }
    this.hasErrors = this.errorsMessage.length > 0;


    //   this.errorsMessage = [];
    //   if (this.clienteForm.get('nombre')!.hasError('required')) {
    //     this.errorsMessage.push('Nome é obrigatório');
    //   }
    //   if (this.clienteForm.get('email')!.hasError('required')) {
    //     this.errorsMessage.push('Email é obrigatório');
    //   }
    //   this.hasErrors = this.errorsMessage.length > 0;
  }
}
