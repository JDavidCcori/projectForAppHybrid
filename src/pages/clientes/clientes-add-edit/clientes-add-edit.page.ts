import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { ActionSheetController, LoadingController, MenuController, Platform } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ClientesService } from 'src/app/services/clientes.service';
import { AlertService } from 'src/app/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { FotosService } from 'src/app/services/fotos.service';
import { Capacitor } from '@capacitor/core';


@Component({
  templateUrl: './clientes-add-edit.page.html'
})
export class ClientesAddEditPage implements OnInit {
  private cliente!: Cliente;
  public modoDeEdicion = false;
  public clienteForm!: FormGroup;
  public fechaSeleccionada:string = new Date().toLocaleDateString();

  public rutaParaFoto: string = 'assets/imgs/icon_clientes.png';

  constructor(
    private formBuilder: FormBuilder,
    private platform: Platform,
    private datePicker: DatePicker,
    private loadingCtrl: LoadingController,
    private clientesService: ClientesService,
    private alertService: AlertService,
    private router: Router,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private fotosService: FotosService,
  ) { }

  async ngOnInit() {
    
  }

  async ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
     
    if (id != '-1'){
      this.cliente = await this.clientesService.getById(id!);
    } else {
      this.cliente = { clienteid: '', nombre: '', email: '', telefono: '', ingreso: 0.00, nacimiento: new Date(), foto: this.rutaParaFoto };
      this.modoDeEdicion = true;
    }
    
    
    this.clienteForm = this.formBuilder.group({
      clienteid: [this.cliente.clienteid],
      nombre: [this.cliente.nombre, Validators.required],
      email: [this.cliente.email, Validators.required],
      telefono: [this.cliente.telefono, Validators.required],
      ingreso: [this.cliente.ingreso, Validators.required],
      nacimiento: [this.cliente.nacimiento, Validators.required],
      nacimientopicker: [],
      foto: [this.cliente.foto],
    });
  }

  async capturarFoto() {
    const actionSheet = await this.actionSheetController.create(
    {
        header: 'Capturar la foto del cliente',
        buttons: [{
            text: 'De galeria de imagenes',
            handler: async () => {
              await this.fotosService.elegirFoto();
              this.rutaParaFoto = Capacitor.convertFileSrc(this.fotosService.rutaParaFoto);
            }
        },
        {
            text: 'Utilizar la cámara',
            handler: async () => {
              await this.fotosService.obtenerFoto();
              this.rutaParaFoto = Capacitor.convertFileSrc(this.fotosService.rutaParaFoto);
            }
        },
        {
            text: 'Cancelar',
            role: 'cancel'
        }
        ]
    });
    await actionSheet.present();
}

  async submit() {
    if (this.clienteForm.invalid || this.clienteForm.pending) {
      await this.alertService.presentAlert('Falla', 'Guardado no realizado',
        'Verifique los datos ingesados', ['Ok']);
      return;
    }

    const loading = await this.loadingCtrl.create();
    await loading.present();


    if (this.fotosService.rutaParaFoto != '') {
      this.clienteForm.controls['foto'].setValue(this.fotosService.rutaParaFoto);
    } else {
      this.clienteForm.controls['foto'].setValue('');
    }

    if (this.cliente.clienteid === '') {
      await this.clientesService.create(this.clienteForm.value);
    } else {
      await this.clientesService.update(this.clienteForm.value);
    }
    loading.dismiss().then(() => {
      this.toastService.presentToast('Guardado exitoso', 3000, 'top');
      this.router.navigateByUrl('/clientes-listado');
    });
  }

  confirmarFecha() {
    let fecha = new Date(this.clienteForm.controls['nacimientopicker'].value).toLocaleDateString();
    return fecha;
  }
     
  iniciarEdicion() {
    this.modoDeEdicion = true;
  }

  cancelarEdicion() {
    this.modoDeEdicion = false;
  }
}