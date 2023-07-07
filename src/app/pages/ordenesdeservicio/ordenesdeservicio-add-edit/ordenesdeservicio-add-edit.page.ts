import { Component, OnInit } from '@angular/core';
import { OrdenDeServicio } from 'src/app/models/ordendeservicio.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesDeServicioService } from 'src/app/services/ordenesdeservicio.service';
import { ToastService } from 'src/app/services/toast.service';
import { AlertService } from 'src/app/services/alert.service';
//import { DatePipe } from '@angular/common';
import { SearchService } from 'src/app/services/search.service';


@Component({
  templateUrl: './ordenesdeservicio-add-edit.page.html'
})
export class OrdenesDeServicioAddEditPage implements OnInit {
  private ordenDeServicio!: OrdenDeServicio;
  public modoDeEdicion = false;
  public osForm!: FormGroup;
  public clientes: void | Cliente[] = [];
  public nombreCliente = 'Consulte cliente';

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private datePicker: DatePicker,
    private platform: Platform,
    private route: ActivatedRoute,
    private ordensDeServicoService: OrdenesDeServicioService,
    private toastService: ToastService,
    private alertService: AlertService,
    private router: Router,
    // private datePipe: DatePipe,
    private searchService: SearchService,
    private loadingCtrl: LoadingController,

  ) {
    this.registrarServicoClienteSelecionado();
  }

  private registrarServicoClienteSelecionado() {
    this.searchService.getObservable().subscribe((data: Cliente) => {
      this.nombreCliente = data.nombre;
      this.osForm.controls['clienteid'].setValue(data.clienteid);
      console.log('this.osForm.controls.clienteid.value: ' + this.osForm.controls['clienteid'].value);
    });
  }

  private createUpdateFormGroup() {
    this.osForm = this.formBuilder.group({
      ordendeservicioid: [this.ordenDeServicio.ordendeservicioid],
      clienteid: [this.ordenDeServicio.clienteid, Validators.required],
      vehiculo: [this.ordenDeServicio.vehiculo, Validators.required],
      fechaentrada: [this.ordenDeServicio.fechahoraentrada.toLocaleDateString(), Validators.required],
      horaentrada: [this.ordenDeServicio.fechahoraentrada.toLocaleTimeString('es-PE'), Validators.required],
      fechahoraentrada: [this.ordenDeServicio.fechahoraentrada],
      fechapicker:[],
      horapicker:[],
    });
  }

  async ionViewWillEnter() {
    this.ordenDeServicio = {
      ordendeservicioid: '',
      clienteid: '', vehiculo: '', fechahoraentrada: new Date()
    };

    this.modoDeEdicion = true;
  }

  confirmarFecha(){
    let fecha = new Date(this.osForm.controls['fechapicker'].value);
    this.osForm.controls['fechaentrada'].setValue(fecha.toLocaleDateString());
    this.osForm.controls['fechahoraentrada'].setValue(fecha.toISOString());
    console.log(this.osForm.controls['fechahoraentrada'].value);
    console.log(this.osForm.controls['fechahoraentrada'].value);
    this.osForm.controls['horaentrada'].setValue('');
  }

  confirmarHora(){
    const hora = new Date(this.osForm.controls['horapicker'].value);
    this.osForm.controls['horaentrada'].setValue(hora.toLocaleTimeString());
  }

  cancelarEdicion() {
    this.createUpdateFormGroup();
    this.modoDeEdicion = false;
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== '-1') {
      this.ordenDeServicio = await this.ordensDeServicoService.getById(id!);
      const cliente = await this.clientesService.getById(this.ordenDeServicio.clienteid);
      this.nombreCliente = cliente.nombre;
      this.modoDeEdicion = false;
    } else {
      this.ordenDeServicio = { ordendeservicioid: '', clienteid: '', vehiculo: '', fechahoraentrada: new Date() };
      this.modoDeEdicion = true;
    }

    this.createUpdateFormGroup();
  }

  confirmarFechaEntrada() {
    return new Date(this.osForm.get('fechaentrada')!.value).toLocaleDateString();
  }

  iniciarEdicion() {
    this.modoDeEdicion = true;
  }


  public unsubscribeServices() {
    this.searchService.getObservable().unsubscribe();
  }

  async submit() {
    if (this.osForm.invalid || this.osForm.pending) {
      await this.alertService.presentAlert('Fallo', 'La grabación no se ejecutó',
        'Verifique los datos ingresados de la atención', ['Ok']);
      return;
    }

    const loading = await this.loadingCtrl.create();
    await loading.present();

    console.log(this.osForm.controls['fechahoraentrada'].value);

    const data = new Date(this.osForm.controls['fechahoraentrada'].value).toISOString();

    console.log(data.substring(0, 11) + this.osForm.controls['horaentrada'].value);

    this.osForm.controls['fechahoraentrada'].setValue(
      data.substring(0, 11) + this.osForm.controls['horaentrada'].value
    );

    console.log(this.osForm.value);

    await this.ordensDeServicoService.update(this.osForm.value);

    loading.dismiss().then(() => {
      this.toastService.presentToast('Grabación exitosa', 3000, 'top');
      this.router.navigateByUrl('ordenesdeservicio-listado');
    });

  }
}