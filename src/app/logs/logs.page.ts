import { Component, OnInit } from '@angular/core';
import { ModalController,MenuController } from '@ionic/angular';
import { WebinaruserPage } from '../Webinaruser/Webinaruser.page';
import { FeedbackAdminPage } from '../Feedback-Admin/Feedback-Admin.page';
import { Router } from '@angular/router';
import { AppService } from '../shared/api-services/app.service'




@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
  providers: [AppService]

})
export class LogsPage implements OnInit {
  public load = false;
  DataDetail: any = {};
  RegisterUser: any[] = [];
  GuestUser: any[] = [];
  isDisabled: boolean = false;
  WebinarIdDetail: any;
  AdminAc: boolean = false;
  UserAc: boolean = true;
  webinarUserDetail: any = {};
  RprimaryCount: number;
  GprimaryCount: number;
  TotalCount: any;
  webinarStatusCount : any;
  GuestRecord: any[] = [];
  data: any;
  TotalCountt: any;
  webinar: any[] = [];
  constructor(public modalController: ModalController,private route: Router,public apiService: AppService,public menuCtrl: MenuController) {
    this.WebinarIdDetail = JSON.parse(localStorage.getItem('UserWebinar'));
    this.menuCtrl.enable(false, 'myMenu');
    localStorage.removeItem('ExitApp');

    if (this.WebinarIdDetail.UserType == 'Admin') {
      this.AdminAc = true;
      this.UserAc = false;
    }
  }

  ngOnInit() {
    this.load = true;
    setTimeout(()=>{
      this.apiService.getAll('ViewWebinarDetail', { UserId: this.WebinarIdDetail.Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          this.webinarUserDetail = (response as any).data1[0];
          let Fullwebinar = (response as any).data;
          this.TotalCount = Fullwebinar.length;
          setTimeout(()=>{
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
    this.load = false
          },2000)
          
        }
      })
    },2000);
   
    setTimeout(()=>{
      this.apiService.getAll('ViewWebinarDetail1', { UserId: this.WebinarIdDetail.Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          this.webinarUserDetail = (response as any).data1[0];
          let Fullwebinar = (response as any).data;
          this.TotalCountt = Fullwebinar.length;
      setTimeout(()=>{
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
        this.load = false
      },2000)
         
  
        }
      })
    },2000);
 

  }
  dismiss() {
    this.route.navigate(['/admin-records']);
  }

}


