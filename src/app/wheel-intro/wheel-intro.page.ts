import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-wheel-intro',
  templateUrl: './wheel-intro.page.html',
  styleUrls: ['./wheel-intro.page.scss'],
})
export class WheelIntroPage implements OnInit {

  colorchange:boolean = false;

  dotbox1: boolean=false;
  dotbox2: boolean=false;
  dotbox3: boolean=false;
  dotbox4: boolean=false;
  dotbox5: boolean=false;
  dotbox6: boolean=false;
  dotbox7: boolean=false;
  dotbox8: boolean=false;
  dotbox9: boolean=false;
  dotbox10: boolean=false;
  dotbox11: boolean=false;
  dotbox12: boolean=false;
  dotbox13: boolean=false;
  dotbox14: boolean=false;
  dotbox15: boolean=false;
  dotbox16: boolean=false;
  

  box1: boolean = false;
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
    this.route.navigate(['/collapse']);
  }
  Webinarselect(){
    this.route.navigate(['/webinarselect']);
  }




}