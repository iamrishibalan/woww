import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelpPage } from '../help/help.page';
import { AdminPage } from '../admin/admin.page';
import { UserPage } from '../user/user.page';
import { AppService } from '../shared/api-services/app.service';
import { LoadingService } from '../apiservice/loading.services';
import { Wheeldata, Service } from '../../app/apiservice/staicdata';
let base;
@Component({
  selector: 'app-myactivities',
  templateUrl: './myactivities.page.html',
  styleUrls: ['./myactivities.page.scss'],
  providers: [AppService, Service]
})
export class MyactivitiesPage implements OnInit {
  public load = false;
  WebinarDetail: any = {};
  Wheeldatas: Wheeldata[];
  userDetail: any = {};
  detailss: any = {};
  details: Array<any> = [];
  AppUsage: any = 0;
  Downloadshare: any = 0;
  planningPercent: any;
  PreparingPercent: any;
  PerformingPercent: any;
  ReviewingPercent: any;
  OverallPercent: any;
  TotalHourse: any = 0;
  TotalMinutes: any = 0 ;
  Completed: any = 0;
  needhour: any =0 ;
  hour: any = 0;
  minute : any = 0;
  Hourse : any = 0;
  AppusageTime : any = 0;
  Minutes : any = 0;
  // timing : any ;
  constructor(private route: Router, public modalController: ModalController, public loading: LoadingService, public apiService: AppService) {
    localStorage.removeItem('ExitApp');
  }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));
    // this.loading.present();
    this.load = true;
    this.apiService.getAll('getAllWebinar', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
      this.load = false;
      if ((response as any).isSuccess) {
        // this.loading.dismiss();
        this.details = (response as any).data;
        this.detailss = (response as any).data[0];
        this.AppUsage = (response as any).data1[0].result;
        this.Downloadshare = (response as any).data2[0];
      }
      else {
        // this.loading.dismiss();
      }
    })
    this.apiService.create('getAllWebinarTime', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
      if ((response as any).isSuccess) {
        let timing = (response as any).data;
        for (let i = 0; i < timing.length; i++){
          this.Wheeldatas = JSON.parse(timing[i].web_data);
          if (timing[i].web_data) {
            this.planningPercent = (Math.round(((this.Wheeldatas[0].Planning[1].Decidingonthetopic + this.Wheeldatas[0].Planning[1].AssigningRoles + this.Wheeldatas[0].Planning[1].Recruitingthespeakers + this.Wheeldatas[0].Planning[1].Decidingontheplatform) / 4) * 100) / 100).toFixed(1);

            let PlanHours = parseFloat(this.Wheeldatas[0].Planning[1].DecidingonthetopicTime == null ? 0 : this.Wheeldatas[0].Planning[1].DecidingonthetopicTime) + parseFloat(this.Wheeldatas[0].Planning[1].AssigningRolesTime == null ? 0 : this.Wheeldatas[0].Planning[1].AssigningRolesTime) + parseFloat(this.Wheeldatas[0].Planning[1].RecruitingthespeakersTime == null ? 0 : this.Wheeldatas[0].Planning[1].RecruitingthespeakersTime) + parseFloat(this.Wheeldatas[0].Planning[1].DecidingontheplatformTime == null ? 0 : this.Wheeldatas[0].Planning[1].DecidingontheplatformTime);
            //Preparing Completed
            this.PreparingPercent = (Math.round(((this.Wheeldatas[0].Preparing[1].Preparetheequipments + this.Wheeldatas[0].Preparing[1].SetupRegistration + this.Wheeldatas[0].Preparing[1].Marketing + this.Wheeldatas[0].Preparing[1].DryRun) / 4) * 100) / 100).toFixed(1);

            let PreparingHours = parseFloat(this.Wheeldatas[0].Preparing[1].PreparetheequipmentsTime == null ? 0 : this.Wheeldatas[0].Preparing[1].PreparetheequipmentsTime) + parseFloat(this.Wheeldatas[0].Preparing[1].SetupRegistrationTime == null ? 0 : this.Wheeldatas[0].Preparing[1].SetupRegistrationTime) + parseFloat(this.Wheeldatas[0].Preparing[1].MarketingTime == null ? 0 : this.Wheeldatas[0].Preparing[1].MarketingTime) + parseFloat(this.Wheeldatas[0].Preparing[1].DryRunTime == null ? 0 : this.Wheeldatas[0].Preparing[1].DryRunTime);

            //Performing completed
            this.PerformingPercent = (Math.round(((this.Wheeldatas[0].Performing[1].Checkontheconnections + this.Wheeldatas[0].Performing[1].Recordthewebinar + this.Wheeldatas[0].Performing[1].Promoteonsocialmedia + this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests) / 4) * 100) / 100).toFixed(1);

            let PerformingHours = parseFloat(this.Wheeldatas[0].Performing[1].CheckontheconnectionsTime == null ? 0 : this.Wheeldatas[0].Performing[1].CheckontheconnectionsTime) + parseFloat(this.Wheeldatas[0].Performing[1].RecordthewebinarTime == null ? 0 : this.Wheeldatas[0].Performing[1].RecordthewebinarTime) + parseFloat(this.Wheeldatas[0].Performing[1].PromoteonsocialmediaTime == null ? 0 : this.Wheeldatas[0].Performing[1].PromoteonsocialmediaTime) + parseFloat(this.Wheeldatas[0].Performing[1].GatherspeakerandcallinguestsTime == null ? 0 : this.Wheeldatas[0].Performing[1].GatherspeakerandcallinguestsTime);

            //Reviewing Completed
            this.ReviewingPercent = (Math.round(((this.Wheeldatas[0].Reviewing[1].Sendingfeedback + this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing + this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback + this.Wheeldatas[0].Reviewing[1].Planfornextwebinar) / 4) * 100) / 100).toFixed(1);

            let ReviewingHours = parseFloat(this.Wheeldatas[0].Reviewing[1].SendingfeedbackTime == null ? 0 : this.Wheeldatas[0].Reviewing[1].SendingfeedbackTime) + parseFloat(this.Wheeldatas[0].Reviewing[1].CollectingthematerialsandsharingTime == null ? 0 : this.Wheeldatas[0].Reviewing[1].CollectingthematerialsandsharingTime) + parseFloat(this.Wheeldatas[0].Reviewing[1].EvaluatethefeedbackTime == null ? 0 : this.Wheeldatas[0].Reviewing[1].EvaluatethefeedbackTime) + parseFloat(this.Wheeldatas[0].Reviewing[1].PlanfornextwebinarTime == null ? 0 : this.Wheeldatas[0].Reviewing[1].PlanfornextwebinarTime);
            //Over all Completed
            this.Minutes = (PlanHours + PreparingHours + PerformingHours + ReviewingHours) / 60;
            this.Hourse = (PlanHours + PreparingHours + PerformingHours + ReviewingHours) / 360;
            this.hour = this.hour + this.Hourse ;
            this.minute = this.minute + this.Minutes;
          }
          else {
          }
        }
      this.TotalHourse = Math.round(this.hour) + '' + ' H : ';
      this.TotalMinutes = Math.round(this.minute) + '' + ' M';
      this.AppusageTime = this.TotalHourse + this.TotalMinutes;
      }
      else {
      }
    })
  }

  async presentModal() {
    const help = await this.modalController.create({
      component: HelpPage,
      cssClass: 'my-custom-class'
    });
    return await help.present();
  }
  async Update() {
    const Admin = await this.modalController.create({
      component: AdminPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }
  async User() {
    const Admin = await this.modalController.create({
      component: UserPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }

  collapse() {
    this.route.navigate(['/collapse']);
  }

  Webinarselect() {
    this.route.navigate(['/webinarselect']);
  }

}

