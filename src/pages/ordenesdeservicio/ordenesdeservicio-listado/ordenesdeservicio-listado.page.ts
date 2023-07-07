import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { OrdenDeServicio } from 'src/app/models/ordendeservicio.model';
import { AlertService } from 'src/app/services/alert.service';
import { OrdenesDeServicioService } from 'src/app/services/ordenesdeservicio.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-ordenesdeservicio-listado',
  templateUrl: './ordenesdeservicio-listado.page.html',
  styleUrls: ['./ordenesdeservicio-listado.page.scss'],
})
export class OrdenesdeservicioListadoPage implements OnInit {

  public ordenesDeServicio!: OrdenDeServicio[];
  @ViewChild('slidingList') slidingList!: IonList;

  constructor(
    private ordenesDeServicioService: OrdenesDeServicioService,
    private toastService: ToastService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.ordenesDeServicio = await this.ordenesDeServicioService.getAll();
  }

  async removerAtencion(ordenDeServicio: OrdenDeServicio) {
    try {
      const successFunction = async () => {
        await this.ordenesDeServicioService.removeById(ordenDeServicio.ordendeservicioid);
        this.toastService.presentToast('Atención eliminada con éxito', 3000, 'top');
        this.slidingList.closeSlidingItems();
        this.ordenesDeServicio = await this.ordenesDeServicioService.getAll();
      };
      await this.alertService.presentConfirm('Eliminar atención', 'Confirma eliminación?', successFunction);
    } catch (e:any) {
      await this.alertService.presentAlert('Falló', 'Eliminación no fue ejecutada', e, ['Ok']);
    }
  }

}