import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/Rx';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../shared/api-services/app.service'
let base;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  providers: [AppService]

})
export class AdminPage implements OnInit {
  UserDetail: any;
  strTime: any;
  GoodMor: string;

  constructor(public modalController: ModalController, private route: Router, public menuCtrl: MenuController, public apiService: AppService) {
    this.UserDetail = JSON.parse(localStorage.getItem('UserDetail'));
    let valuyear = new Date(this.UserDetail.reg_CreateDate);
    this.UserDetail.year = valuyear.getFullYear();
    localStorage.removeItem('ExitApp');

    let Good = new Date();
    var hours = Good.getHours();
    if (hours == 1 || hours < 10) {
      this.GoodMor = "Good Morning";
    }
    if (hours > 10 || hours < 15) {
      this.GoodMor = "Good Afternoon";
    }
    if (hours > 15) {
      this.GoodMor = "Good Evening";
    }
    // var minutes: any = Good.getMinutes();
    // var ampm = hours >= 12 ? 'pm' : 'am';
    // hours = hours % 12;
    // hours = hours ? hours : 12; 
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    // this.strTime = hours + ':' + minutes + ' ' + ampm;
  }
  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
