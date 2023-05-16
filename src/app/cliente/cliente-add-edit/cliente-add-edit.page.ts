import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})


export class ClienteAddEditPage implements OnInit {
  clienteForm!: FormGroup;
  hasErrors = false;
  errorsMessage!: string[];
  fechaSeleccionada: any;

  validationMessages = {
    nombre: [
      { type: 'required', message: 'Nombre es obligatório' },
      { type: 'minlength', message: 'Nombre debe tener por lo menos 3 caracteres' },
      { type: 'maxlength', message: 'Nombre debe tener a lo más 50 caracteres' }
    ],
    email: [
      { type: 'required', message: 'Email es requerido' },
      { type: 'email', message: 'Email no es valido' }
    ],

    ingreso: [
      { type: 'min', message: 'El ingreso debe ser positivo' }
    ]
  };

  constructor(private formBuilder: FormBuilder, private datePicker: DatePicker,
    private platform: Platform,) { }

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
        '', Validators.required!],
      ingreso: [
        '0',
        Validators.compose([
          Validators.required!,
          Validators.min(0)
        ])],
      nacimiento: [{ value: '', disabled: !this.isBrowserPlatform }, Validators.required]
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

  confirmarFecha() {
    return new Date(this.clienteForm.get('nacimiento')?.value).toLocaleDateString();
  }

  selecionarFecha() {
    this.platform.ready().then(() => {
      if (this.platform.is('capacitor')) {
        this.datePicker.show({
          date: new Date(),
          mode: 'date',
          locale: 'es-PE',
          doneButtonLabel: 'Confirmar',
          cancelButtonLabel: 'Cancelar'
        })
          .then(
            fecha => this.clienteForm.controls['nacimiento'].setValue(fecha.toLocaleDateString())
          );
      } else {
        // instruções para execução no navegador
      }
    });
  }

  get isBrowserPlatform(): boolean {
    if (this.platform.is('capacitor')) {
      return false;
    }
    return true;
  }
}
