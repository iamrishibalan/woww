import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  @ViewChild('paragraph') paragraph;
  current = 0;
  prev = -1;
  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  onPrev() {
    this.slides.slidePrev();
  }


  onNext() {
    this.slides.slideNext();
  }

}
