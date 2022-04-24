import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularDelegate, IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
// import { PdfViewerService } from '../apiservice/pdf-viewer.service';

@Component({
  selector: 'app-getstart',
  templateUrl: './getstart.page.html',
  styleUrls: ['./getstart.page.scss'],
})
export class GetstartPage implements OnInit {
  isActive: any = 's1';
  d1: boolean = true;
  d2: boolean = false;
  d3: boolean = false;
  @ViewChild('slides') slides: IonSlides;
  @ViewChild('paragraph') paragraph;
  current = 0;
  prev = -1;
  indexChanged: string = 'Current slide index: 0';
  constructor(private route: Router) {
    localStorage.removeItem('ExitApp');
    if (localStorage.getItem('isFirst') != null) {
      this.Signin();
    }
  }


  ngOnInit() {
    // var array = document.getElementById('d1'){
    // }
  }

  Signin() {
    localStorage.setItem("Signin", "signin");
    this.route.navigate(['/register']);
  }
  register() {
    this.route.navigate(['/register']);
  }


  sliderChanges(e) {
    if(e.currentTarget.dom7ElementDataStorage.swiper.activeIndex === 1){
      this.d1 = false;
      this.d2 = true;
      this.d3 = false;

    }
    else if( e.currentTarget.dom7ElementDataStorage.swiper.activeIndex === 2 ){
      this.d1 = false;
      this.d2 = false;
      this.d3 = true;
    }
    else if(e.currentTarget.dom7ElementDataStorage.swiper.activeIndex === 0 ){
      this.d1 = true;
      this.d2 = false;
      this.d3 = false;
    }
    else{   
    }
  }

}
