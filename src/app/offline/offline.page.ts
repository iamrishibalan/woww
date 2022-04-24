import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController,ToastController } from '@ionic/angular';
import { AppService } from '../shared/api-services/app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-offline',
  templateUrl: './offline.page.html',
  styleUrls: ['./offline.page.scss'],
  providers: [AppService]
})
export class OfflinePage implements OnInit {
  constructor(public modalController: ModalController,private toastCtrl: ToastController, public apiService: AppService,private route: Router) { }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }
  dismiss() {
    this.presentToast("NO Internet Connection");
    this.apiService.getAll('modalwelcome', { }).subscribe(async(response) =>  { 
      let UsedCollapse = (response as any).data;
      if ( UsedCollapse != 0) { 
        this.modalController.dismiss({
          'dismissed': true
        });
        this.route.navigate(['/mywebinar']);
      }
      else {
        this.presentToast("NO Internet Connection");
      }
    });
   
  }
}
