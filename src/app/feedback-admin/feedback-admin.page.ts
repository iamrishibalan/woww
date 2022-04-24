import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WebinaruserPage } from '../Webinaruser/Webinaruser.page';
import { LogsPage } from '../Logs/Logs.page';
import { AppService } from '../shared/api-services/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.page.html',
  styleUrls: ['./feedback-admin.page.scss'],
  providers: [AppService]

})
export class FeedbackAdminPage implements OnInit {
  public load = false
  webinar: any[] = [];
  WebinarIdDetail: any = {};
  webinarUserDetail: any = {};
  TotalCount: any = 0;
  RegisterUser: any[] = [];
  GuestUser: any[] = [];
  GuestRecord: any[] = [];
  RprimaryCount: number;
  GprimaryCount: number;
  AdminAc: boolean = false;
  UserAc: boolean = true;
  TotalCountt: any;
  webinarUserDetails: any;

  isDisabled: boolean = false;
  constructor(public modalController: ModalController, private route: Router, public apiService: AppService) {
    localStorage.removeItem('ExitApp');
    this.WebinarIdDetail = JSON.parse(localStorage.getItem('UserWebinar'));
    if (this.WebinarIdDetail.UserType == 'Admin') {
      this.AdminAc = true;
      this.UserAc = false;
    }
  }

  ngOnInit() {
    this.load = true;
    setTimeout(() => {
      this.apiService.getAll('ViewWebinarDetail1', { UserId: this.WebinarIdDetail.Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          this.webinarUserDetail = (response as any).data1[0];
          let Fullwebinar = (response as any).data;
          this.TotalCount = Fullwebinar.length;
          setTimeout(() => {
            if (Fullwebinar.length != 0) {
              this.RegisterUser = Fullwebinar.filter(x => x.webinar_Type == 'RegisterUser');
              this.GuestUser = Fullwebinar.filter(x => x.webinar_Type != 'RegisterUser');
              let GustEmail = [];
              this.GuestRecord = [];
              for (let i = 0; i < this.GuestUser.length; i++) {
                let data = this.GuestUser[i].webinar_Email;
                if (GustEmail.length == 0) {
                  GustEmail.push(data);
                }
                else {
                  let vals = GustEmail.filter(x => x == data)
                  if (vals.length == 0) {
                    GustEmail.push(data);
                  }
                }
              }
              for (let j = 0; j < GustEmail.length; j++) {
                let record = this.GuestUser.filter(x => x.webinar_Email == GustEmail[j]);
                this.GuestRecord.push(record);
              }
              if (this.RegisterUser.length != 0) {
                this.RprimaryCount = this.RegisterUser.length;
              }
              if (this.GuestUser.length != 0) {
                this.GprimaryCount = this.GuestUser.length;
              }
            }
            this.load = false;
          }, 2000)
        }
      })
    }, 2000);

    setTimeout(() => {
      this.apiService.getAll('ViewWebinarDetail', { UserId: this.WebinarIdDetail.Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          this.webinarUserDetails = (response as any).data1[0];
          let Fullwebinar = (response as any).data;
          this.TotalCountt = Fullwebinar.length;
          setTimeout(() => {
            if (Fullwebinar.length != 0) {
              this.RegisterUser = Fullwebinar.filter(x => x.webinar_Type == 'RegisterUser');
              this.GuestUser = Fullwebinar.filter(x => x.webinar_Type != 'RegisterUser');
              let GustEmail = [];
              this.GuestRecord = [];
              for (let i = 0; i < this.GuestUser.length; i++) {
                let data = this.GuestUser[i].webinar_Email;
                if (GustEmail.length == 0) {
                  GustEmail.push(data);
                }
                else {
                  let vals = GustEmail.filter(x => x == data)
                  if (vals.length == 0) {
                    GustEmail.push(data);
                  }
                }
              }
              for (let j = 0; j < GustEmail.length; j++) {
                let record = this.GuestUser.filter(x => x.webinar_Email == GustEmail[j]);
                this.GuestRecord.push(record);
              }
              if (this.RegisterUser.length != 0) {
                this.RprimaryCount = this.RegisterUser.length;
              }
              if (this.GuestUser.length != 0) {
                this.GprimaryCount = this.GuestUser.length;
              }
            }
            this.load = false;
          }, 2000)
        }
      })
    }, 2000)
  }
  dismiss() {
    this.route.navigate(['/admin-records']);
  }
  // filter(){
  //   this.isDisabled = !this.isDisabled;
  // }
  // async Webinaruser() {
  //   this.modalController.dismiss({
  //     'dismissed': true
  //   });
  //   const Page = await this.modalController.create({
  //     component: WebinaruserPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await Page.present();
  // }

  // async Logs() {
  //   this.modalController.dismiss({
  //     'dismissed': true
  //   });
  //   const Page = await this.modalController.create({
  //     component: LogsPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await Page.present();
  // }
}