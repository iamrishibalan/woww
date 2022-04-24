import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController,LoadingController  } from '@ionic/angular';
import { HelpPage } from '../help/help.page';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.page.html',
  styleUrls: ['./expand.page.scss'],
})
export class ExpandPage implements OnInit {

  constructor(private route: Router,  public toastCtrl: ToastController,public modalController: ModalController,
    public loadingController: LoadingController) {
      localStorage.removeItem('ExitApp');

     }

  ngOnInit() {
    // this.presentToast();
    // this.presentLoading();
  }

  async presentLoading() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
      await loading.present();

    await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentModal() {
    const help = await this.modalController.create({
      component: HelpPage,
      cssClass: 'my-custom-class'
    });
    return await help.present();
  }
  collapse(){
    this.route.navigate(['/collapse']);
  }
  Webinarselect(){
    this.route.navigate(['/webinarselect']);
  }
}
