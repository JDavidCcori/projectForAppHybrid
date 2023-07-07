import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Cliente } from 'src/app/models/cliente.model';
import { AlertService } from 'src/app/services/alert.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ToastService } from 'src/app/services/toast.service';
import { Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-clientes-listado',
  templateUrl: './clientes-listado.page.html',
  styleUrls: ['./clientes-listado.page.scss'],
})
export class ClientesListadoPage implements OnInit {
  public clientes!: Cliente[];
  @ViewChild('slidingList') slidingList!: IonList;

  constructor(    
    private clientesService: ClientesService,
    private toastService: ToastService,
    private alertService: AlertService,) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.clientes = await this.clientesService.getAll();
  }

  rutaFotoParaListado(foto: string) {
    if (foto != '') {
      return Capacitor.convertFileSrc(foto);
    } else {
      return 'assets/imgs/icon_clientes.png';
    }
  }

  async removeCliente(cliente: Cliente) {
    try {
      const successFunction = async () => {
        this.clientesService.removeById(cliente.clienteid);
        this.toastService.presentToast('Cliente eliminado com éxito', 3000, 'top');
        this.slidingList.closeSlidingItems();
        this.clientes = await this.clientesService.getAll();
      };
      await this.alertService.presentConfirm('Eliminar Cliente', 'Confirma eliminación?', successFunction);
    } catch (e:any) {
      await this.alertService.presentAlert('Falla', 'Eliminación no ejecutada', e, ['Ok']);
    }
  }
}

