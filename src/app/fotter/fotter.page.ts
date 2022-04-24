import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.page.html',
  styleUrls: ['./fotter.page.scss'],
})
export class FotterPage implements OnInit {

  constructor(private route: Router, public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  Collapse(){
    this.route.navigate(['/expand']);
  }
}
