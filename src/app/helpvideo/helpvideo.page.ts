import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { AdminPage } from '../admin/admin.page';
import { HelpPage } from '../help/help.page';
import { AppService } from '../shared/api-services/app.service';
import { UserPage } from '../user/user.page';


import { Router }  from '@angular/router'

@Component({
  selector: 'app-helpvideo',
  templateUrl: './helpvideo.component.html',
  styleUrls: ['./helpvideo.component.scss'],
})
export class HelpvideoPage implements OnInit {
  adminlogo: boolean = false;
  userDetail: any = {};
  details: Array<any> = [];
  webinarUserDetail: any;
  constructor(public modalController: ModalController,public apiService: AppService) { }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));

    this.apiService.getAll('getAllWebinar', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
      if ((response as any).isSuccess) {
        // this.loading.dismiss();
        this.details = (response as any).data;
      }
      else {
        // this.loading.dismiss();
      }
    })
    this.apiService.getAll('ViewWebinarDetail', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
      if ((response as any).isSuccess) {
        this.webinarUserDetail = (response as any).data1[0];
        let Fullwebinar = (response as any).data;
      }
      else {
        // this.loading.dismiss();
      }

    })
  }
  async Update() {
    this.adminlogo = true;
    const Admin = await this.modalController.create({
      component: AdminPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }
  async presentModal() {
    const help = await this.modalController.create({
      component: HelpPage,
      cssClass: 'my-custom-class'
    });
    return await help.present();
  }
  async User() {
    const Admin = await this.modalController.create({
      component: UserPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }
}
