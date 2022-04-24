import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-macrohelp',
  templateUrl: './macrohelp.page.html',
  styleUrls: ['./macrohelp.page.scss'],
})
export class MacrohelpPage implements OnInit {
  @ViewChild('slidesRef',{static: true})  private slides: IonSlides;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
