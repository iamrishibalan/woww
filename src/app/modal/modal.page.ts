import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @ViewChild('slidesRef',{static: true})  private slides: IonSlides;
  constructor(public modalController: ModalController) {

  }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    
  };

  onSlideMoved(event) {
    /** isEnd true when slides reach at end slide */
    event.target.isEnd().then(isEnd => {
      console.log('End of slide', isEnd);
    });

    event.target.isBeginning().then((istrue) => {
      console.log('End of slide', istrue);
    });
  }
  previousSlide(): void {
    this.slides.slidePrev();
 }

 goNext(): void {
   this.slides.slideNext();
 }
  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  

 
}
