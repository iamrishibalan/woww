import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MacrohelpPage } from '../macrohelp/macrohelp.page';
import { AppService } from '../shared/api-services/app.service';
import { Wheeldata, Service } from '../../app/apiservice/staicdata';
import { LoginService } from '../../app/login.service'
import { LoadingService } from '../apiservice/loading.services';
import { AdminPage } from '../admin/admin.page';
import { UserPage } from '../user/user.page';
import { HelpPage } from '../help/help.page';
import { async } from '@angular/core/testing';

let base;
declare var $: any;
@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.page.html',
  styleUrls: ['./collapse.page.scss'],
  providers: [AppService, Service]
})
export class CollapsePage implements OnInit {
  Wheeldatas: Wheeldata[];
  colorchange: boolean = false;
  collapsebtn: boolean = true;
  expandbtn: boolean = false;
  CollapseTrue: boolean = false;
  ExpandTrue: boolean = true;
  yone: boolean = false;
  ytwo: boolean = false;
  ythree: boolean = false;
  yfour: boolean = false;
  bone: boolean = false;
  btwo: boolean = false;
  bthree: boolean = false;
  bfour: boolean = false;
  gone: boolean = false;
  gtwo: boolean = false;
  gthree: boolean = false;
  gfour: boolean = false;
  oone: boolean = false;
  otwo: boolean = false;
  othree: boolean = false;
  ofour: boolean = false;
  WebinarDetail: any = {};
  dragging: boolean = false;
  state: string = 'default';
  box1: boolean = false;
  cirecleValue: any = 'NoSelectNode';
  rotations: string;
  WebinarID: any;
  NodeValue: any;
  Webinartype: any;
  planningPercent: any;
  PreparingPercent: any;
  PerformingPercent: any;
  ReviewingPercent: any;
  OverallPercent: any;
  TotalHourse: any = 0;
  Recruit1: boolean = false;
  Recruit2: boolean = false;
  Recruit3: boolean = false;
  Recruit4: boolean = false;
  Recruit5: boolean = false;
  AssigningRoles1: boolean = false;
  AssigningRoles2: boolean = false;
  AssigningRoles3: boolean = false;
  Decidintopic1: boolean = false;
  Decidintopic2: boolean = false;
  Decidintopic3: boolean = false;
  Decidintopic4: boolean = false;
  Decidinplatform1: boolean = false;
  Decidinplatform2: boolean = false;
  Decidinplatform3: boolean = false;
  Decidinplatform4: boolean = false;
  Decidinplatform5: boolean = false;
  Decidinplatform6: boolean = false;
  Decidinplatform7: boolean = false;
  Decidinplatform8: boolean = false;
  Prepare1: boolean = false;
  Prepare2: boolean = false;
  Prepare3: boolean = false;
  Prepare4: boolean = false;
  Prepare5: boolean = false;
  Prepare6: boolean = false;
  SetupR1: boolean = false;
  SetupR2: boolean = false;
  SetupR3: boolean = false;
  SetupR4: boolean = false;
  SetupR5: boolean = false;
  Marketing1: boolean = false;
  Marketing2: boolean = false;
  Marketing3: boolean = false;
  DryRun1: boolean = false;
  DryRun2: boolean = false;
  DryRun3: boolean = false;
  DryRun4: boolean = false;
  DryRun5: boolean = false;
  DryRun6: boolean = false;
  Recordtheweb1: boolean = false;
  Recordtheweb2: boolean = false;
  Recordtheweb3: boolean = false;
  Recordtheweb4: boolean = false;
  Recordtheweb5: boolean = false;
  Recordtheweb6: boolean = false;
  checkconnection1: boolean = false;
  checkconnection2: boolean = false;
  checkconnection3: boolean = false;
  checkconnection4: boolean = false;
  Gatherspeaker1: boolean = false;
  Gatherspeaker2: boolean = false;
  Gatherspeaker3: boolean = false;
  Gatherspeaker4: boolean = false;
  Evaluatethefeed1: boolean = false;
  Evaluatethefeed2: boolean = false;
  Evaluatethefeed3: boolean = false;
  Promoteonsocial1: boolean = false;
  Promoteonsocial2: boolean = false;
  Promoteonsocial3: boolean = false;
  Planfornext1: boolean = false;
  Planfornext2: boolean = false;
  Planfornext3: boolean = false;
  Sending1: boolean = false;
  Sending2: boolean = false;
  Sending3: boolean = false;
  Sending4: boolean = false;
  CollectG1: boolean = false;
  CollectG2: boolean = false;
  CollectG3: boolean = false;
  CollectG4: boolean = false;
  values1 = 1;
  values2 = 0;
  USedtimewebinar: any;
  userDetail: any = {};
  details: Array<any> = [];
  constructor(private route: Router, public loading: LoadingService, public modalController: ModalController, public activatedRoute: ActivatedRoute, public apiService: AppService, public service: Service, private globalTransfer: LoginService) {
    base = this;


  }
 
  ngOnInit() {

    (function () {
      var init, rotate, start, stop,
        active = false,
        angle = 0,
        rotation = 0,
        startAngle = 0,
        center = {
          x: 0,
          y: 0
        },
        R2D = 180 / Math.PI,
        rot = document.getElementById('rotate');
      setTimeout(() => {
        init = function () {
          rot.addEventListener("pointerdown", start, false);
          $(document).bind('pointermove', function (event) {
            if (active === true) {
              event.preventDefault();
              rotate(event);
            }
          });
          $(document).bind('pointerup', function (event) {
            event.preventDefault();
            stop(event);
          });
        };

        start = function (e) {
          e.preventDefault();
          var bb = this.getBoundingClientRect(),
            t = bb.top,
            l = bb.left,
            h = bb.height,
            w = bb.width,
            x, y;
          center = {
            x: l + (w / 2),
            y: t + (h / 2)
          };
          x = e.clientX - center.x;
          y = e.clientY - center.y;
          startAngle = R2D * Math.atan2(y, x);
          return active = true;
        };

        rotate = function (e) {
          e.preventDefault();
          var x = e.clientX - center.x,
            y = e.clientY - center.y,
            d = R2D * Math.atan2(y, x);
          rotation = d - startAngle;
          return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
        };

        stop = function () {
          angle += rotation;
          return active = false;
        };

        init();
      }, 2000)


    }).call(this);



    this.activatedRoute.queryParams.subscribe((res) => {
      //initial false
      this.Recruit1 = false;
      this.Recruit2 = false;
      this.Recruit3 = false;
      this.Recruit4 = false;
      this.Recruit5 = false;
      this.AssigningRoles1 = false;
      this.AssigningRoles2 = false;
      this.AssigningRoles3 = false;
      this.Decidintopic1 = false;
      this.Decidintopic2 = false;
      this.Decidintopic3 = false;
      this.Decidintopic4 = false;
      this.Decidinplatform1 = false;
      this.Decidinplatform2 = false;
      this.Decidinplatform3 = false;
      this.Decidinplatform4 = false;
      this.Decidinplatform5 = false;
      this.Decidinplatform6 = false;
      this.Decidinplatform7 = false;
      this.Decidinplatform8 = false;
      this.Prepare1 = false;
      this.Prepare2 = false;
      this.Prepare3 = false;
      this.Prepare4 = false;
      this.Prepare5 = false;
      this.Prepare6 = false;
      this.SetupR1 = false;
      this.SetupR2 = false;
      this.SetupR3 = false;
      this.SetupR4 = false;
      this.SetupR5 = false;
      this.Marketing1 = false;
      this.Marketing2 = false;
      this.Marketing3 = false;
      this.DryRun1 = false;
      this.DryRun2 = false;
      this.DryRun3 = false;
      this.DryRun4 = false;
      this.DryRun5 = false;
      this.DryRun6 = false;
      this.Recordtheweb1 = false;
      this.Recordtheweb2 = false;
      this.Recordtheweb3 = false;
      this.Recordtheweb4 = false;
      this.Recordtheweb5 = false;
      this.Recordtheweb6 = false;
      this.checkconnection1 = false;
      this.checkconnection2 = false;
      this.checkconnection3 = false;
      this.checkconnection4 = false;
      this.Gatherspeaker1 = false;
      this.Gatherspeaker2 = false;
      this.Gatherspeaker3 = false;
      this.Gatherspeaker4 = false;
      this.Evaluatethefeed1 = false;
      this.Evaluatethefeed2 = false;
      this.Evaluatethefeed3 = false;
      this.Promoteonsocial1 = false;
      this.Promoteonsocial2 = false;
      this.Promoteonsocial3 = false;
      this.Planfornext1 = false;
      this.Planfornext2 = false;
      this.Planfornext3 = false;
      this.Sending1 = false;
      this.Sending2 = false;
      this.Sending3 = false;
      this.Sending4 = false;
      this.CollectG1 = false;
      this.CollectG2 = false;
      this.CollectG3 = false;
      this.CollectG4 = false;
      //end
      this.WebinarID = res.WebinarId;
      this.Webinartype = res.Webinartype;
      let ExitPage = {
        path: 'collapse',
        WebinarId: this.WebinarID,
        Webinartype: this.Webinartype
      }
      localStorage.setItem('ExitApp', JSON.stringify(ExitPage));
      //this.loading.present();
      setTimeout(()=>{
        this.apiService.create('getSingleWebinarDetail', { WebinarId: res.WebinarId, Webinartype: res.Webinartype }).subscribe((response) => {
          // this.loading.dismiss();
          if ((response as any).isSuccess) {
            base.WebinarDetail = (response as any).data[0];
            let webinarStatus = (response as any).data1;
  
            if (webinarStatus != 'No Record') {
              this.Wheeldatas = JSON.parse(webinarStatus[0].web_data);
              //planning Completed
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
              
              let Minutes = (PlanHours + PreparingHours + PerformingHours + ReviewingHours) / 60;
              let Hourse = (PlanHours + PreparingHours + PerformingHours + ReviewingHours) / 360;
              if (Hourse >= 1) {
                this.TotalHourse = Math.round(Hourse) + ' ' + 'Hrs';
              }
              else if (Minutes >= 1) {
                this.TotalHourse = Math.round(Minutes) + ' ' + 'Minutes';
              }
              else {
                this.TotalHourse = Math.round(PlanHours + PreparingHours + PerformingHours + ReviewingHours) + ' ' + 'Sec';
              }
              this.OverallPercent = (Math.round(((parseFloat(this.planningPercent) + parseFloat(this.PreparingPercent) + parseFloat(this.PerformingPercent) + parseFloat(this.ReviewingPercent)) / 4) * 100) / 100).toFixed(1);
              this.apiService.create('webinarCompletedStatus', { Percent: this.OverallPercent, webId: this.WebinarID }).subscribe((response) => {
                if ((response as any).isSuccess) {
                  let da = 0;
                }
              })
  
              // this.planningPercent;
              // if (this.planningPercent >= 99) {
              //   this.apiService.getAll('rate1', { web_id: res.WebinarId,data1 : this.values1 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
              // else{
              //   this.apiService.getAll('rate1', { web_id: res.WebinarId ,data1 : this.values2 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
              // this.PreparingPercent;
              // if (this.PreparingPercent >= 99) {
              //   this.apiService.getAll('rate2', { web_id: res.WebinarId,data1 : this.values1 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
              // else{
              //   this.apiService.getAll('rate2', { web_id: res.WebinarId,data1 : this.values2 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
              // this.PerformingPercent;
              // if (this.PerformingPercent >= 99) {
              //   this.apiService.getAll('rate3', { web_id: res.WebinarId ,data1 : this.values1 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
              // else{
              //   this.apiService.getAll('rate3', { web_id: res.WebinarId ,data1 : this.values2 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
              // this.ReviewingPercent;
              // 
              // if (this.ReviewingPercent >= 99) {
              //   this.apiService.getAll('rate4', { web_id: res.WebinarId,data1 : this.values1 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
              // else{
              //   this.apiService.getAll('rate4', { web_id: res.WebinarId,data1 : this.values2 }).subscribe((response) => {
              //     if ((response as any).isSuccess) {
              //     }
              //   })
              // }
  
              //Recurt fill color
              if (this.Wheeldatas[0].Planning[1].Recruitingthespeakers >= 20) {
                this.Recruit1 = true;
                this.Recruit2 = false;
                this.Recruit3 = false;
                this.Recruit4 = false;
                this.Recruit5 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Recruitingthespeakers >= 40) {
                this.Recruit1 = true;
                this.Recruit2 = true;
                this.Recruit3 = false;
                this.Recruit4 = false;
                this.Recruit5 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Recruitingthespeakers >= 60) {
                this.Recruit1 = true;
                this.Recruit2 = true;
                this.Recruit3 = true;
                this.Recruit4 = false;
                this.Recruit5 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Recruitingthespeakers >= 80) {
                this.Recruit1 = true;
                this.Recruit2 = true;
                this.Recruit3 = true;
                this.Recruit4 = true;
                this.Recruit5 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Recruitingthespeakers >= 100) {
                this.Recruit1 = true;
                this.Recruit2 = true;
                this.Recruit3 = true;
                this.Recruit4 = true;
                this.Recruit5 = true;
              }
              //Assigning Role fill color
  
              if (this.Wheeldatas[0].Planning[1].AssigningRoles >= 30) {
                this.AssigningRoles1 = true;
                this.AssigningRoles2 = false;
                this.AssigningRoles3 = false;
              }
              if (this.Wheeldatas[0].Planning[1].AssigningRoles >= 60) {
                this.AssigningRoles1 = true;
                this.AssigningRoles2 = true;
                this.AssigningRoles3 = false;
              }
              if (this.Wheeldatas[0].Planning[1].AssigningRoles >= 90) {
                this.AssigningRoles1 = true;
                this.AssigningRoles2 = true;
                this.AssigningRoles3 = true;
              }
              //Decinding On the topic fill color
              if (this.Wheeldatas[0].Planning[1].Decidingonthetopic >= 25) {
                this.Decidintopic1 = true;
                this.Decidintopic2 = false;
                this.Decidintopic3 = false;
                this.Decidintopic4 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingonthetopic >= 50) {
                this.Decidintopic1 = true;
                this.Decidintopic2 = true;
                this.Decidintopic3 = false;
                this.Decidintopic4 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingonthetopic >= 75) {
                this.Decidintopic1 = true;
                this.Decidintopic2 = true;
                this.Decidintopic3 = true;
                this.Decidintopic4 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingonthetopic >= 90) {
                this.Decidintopic1 = true;
                this.Decidintopic2 = true;
                this.Decidintopic3 = true;
                this.Decidintopic4 = true;
              }
              //Decinding On the platForm fill color
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 12) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = false;
                this.Decidinplatform3 = false;
                this.Decidinplatform4 = false;
                this.Decidinplatform5 = false;
                this.Decidinplatform6 = false;
                this.Decidinplatform7 = false;
                this.Decidinplatform8 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 24) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = true;
                this.Decidinplatform3 = false;
                this.Decidinplatform4 = false;
                this.Decidinplatform5 = false;
                this.Decidinplatform6 = false;
                this.Decidinplatform7 = false;
                this.Decidinplatform8 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 36) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = true;
                this.Decidinplatform3 = true;
                this.Decidinplatform4 = false;
                this.Decidinplatform5 = false;
                this.Decidinplatform6 = false;
                this.Decidinplatform7 = false;
                this.Decidinplatform8 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 48) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = true;
                this.Decidinplatform3 = true;
                this.Decidinplatform4 = true;
                this.Decidinplatform5 = false;
                this.Decidinplatform6 = false;
                this.Decidinplatform7 = false;
                this.Decidinplatform8 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 60) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = true;
                this.Decidinplatform3 = true;
                this.Decidinplatform4 = true;
                this.Decidinplatform5 = true;
                this.Decidinplatform6 = false;
                this.Decidinplatform7 = false;
                this.Decidinplatform8 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 72) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = true;
                this.Decidinplatform3 = true;
                this.Decidinplatform4 = true;
                this.Decidinplatform5 = true;
                this.Decidinplatform6 = true;
                this.Decidinplatform7 = false;
                this.Decidinplatform8 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 84) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = true;
                this.Decidinplatform3 = true;
                this.Decidinplatform4 = true;
                this.Decidinplatform5 = true;
                this.Decidinplatform6 = true;
                this.Decidinplatform7 = true;
                this.Decidinplatform8 = false;
              }
              if (this.Wheeldatas[0].Planning[1].Decidingontheplatform >= 96) {
                this.Decidinplatform1 = true;
                this.Decidinplatform2 = true;
                this.Decidinplatform3 = true;
                this.Decidinplatform4 = true;
                this.Decidinplatform5 = true;
                this.Decidinplatform6 = true;
                this.Decidinplatform7 = true;
                this.Decidinplatform8 = true;
              }
              //Preparetheequipments fill color
              if (this.Wheeldatas[0].Preparing[1].Preparetheequipments >= 16) {
                this.Prepare1 = true;
                this.Prepare2 = false;
                this.Prepare3 = false;
                this.Prepare4 = false;
                this.Prepare5 = false;
                this.Prepare6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].Preparetheequipments >= 32) {
                this.Prepare1 = true;
                this.Prepare2 = true;
                this.Prepare3 = false;
                this.Prepare4 = false;
                this.Prepare5 = false;
                this.Prepare6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].Preparetheequipments >= 48) {
                this.Prepare1 = true;
                this.Prepare2 = true;
                this.Prepare3 = true;
                this.Prepare4 = false;
                this.Prepare5 = false;
                this.Prepare6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].Preparetheequipments >= 64) {
                this.Prepare1 = true;
                this.Prepare2 = true;
                this.Prepare3 = true;
                this.Prepare4 = true;
                this.Prepare5 = false;
                this.Prepare6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].Preparetheequipments >= 80) {
                this.Prepare1 = true;
                this.Prepare2 = true;
                this.Prepare3 = true;
                this.Prepare4 = true;
                this.Prepare5 = true;
                this.Prepare6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].Preparetheequipments >= 96) {
                this.Prepare1 = true;
                this.Prepare2 = true;
                this.Prepare3 = true;
                this.Prepare4 = true;
                this.Prepare5 = true;
                this.Prepare6 = true;
              }
              //SetupRegistration fill color
              if (this.Wheeldatas[0].Preparing[1].SetupRegistration >= 20) {
                this.SetupR1 = true;
                this.SetupR2 = false;
                this.SetupR3 = false;
                this.SetupR4 = false;
                this.SetupR5 = false;
  
              }
              if (this.Wheeldatas[0].Preparing[1].SetupRegistration >= 40) {
                this.SetupR1 = true;
                this.SetupR2 = true;
                this.SetupR3 = false;
                this.SetupR4 = false;
                this.SetupR5 = false;
  
              }
              if (this.Wheeldatas[0].Preparing[1].SetupRegistration >= 60) {
                this.SetupR1 = true;
                this.SetupR2 = true;
                this.SetupR3 = true;
                this.SetupR4 = false;
                this.SetupR5 = false;
  
              }
              if (this.Wheeldatas[0].Preparing[1].SetupRegistration >= 80) {
                this.SetupR1 = true;
                this.SetupR2 = true;
                this.SetupR3 = true;
                this.SetupR4 = true;
                this.SetupR5 = false;
  
              }
              if (this.Wheeldatas[0].Preparing[1].SetupRegistration >= 95) {
                this.SetupR1 = true;
                this.SetupR2 = true;
                this.SetupR3 = true;
                this.SetupR4 = true;
                this.SetupR5 = true;
  
              }
              // Marketing fill color
              if (this.Wheeldatas[0].Preparing[1].Marketing >= 30) {
                this.Marketing1 = true;
                this.Marketing2 = false;
                this.Marketing3 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].Marketing >= 60) {
                this.Marketing1 = true;
                this.Marketing2 = true;
                this.Marketing3 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].Marketing >= 90) {
                this.Marketing1 = true;
                this.Marketing2 = true;
                this.Marketing3 = true;
              }
              // Dry run fill color
              if (this.Wheeldatas[0].Preparing[1].DryRun >= 16) {
                this.DryRun1 = true;
                this.DryRun2 = false;
                this.DryRun3 = false;
                this.DryRun4 = false;
                this.DryRun5 = false;
                this.DryRun6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].DryRun >= 32) {
                this.DryRun1 = true;
                this.DryRun2 = true;
                this.DryRun3 = false;
                this.DryRun4 = false;
                this.DryRun5 = false;
                this.DryRun6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].DryRun >= 48) {
                this.DryRun1 = true;
                this.DryRun2 = true;
                this.DryRun3 = true;
                this.DryRun4 = false;
                this.DryRun5 = false;
                this.DryRun6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].DryRun >= 64) {
                this.DryRun1 = true;
                this.DryRun2 = true;
                this.DryRun3 = true;
                this.DryRun4 = true;
                this.DryRun5 = false;
                this.DryRun6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].DryRun >= 80) {
                this.DryRun1 = true;
                this.DryRun2 = true;
                this.DryRun3 = true;
                this.DryRun4 = true;
                this.DryRun5 = true;
                this.DryRun6 = false;
              }
              if (this.Wheeldatas[0].Preparing[1].DryRun >= 96) {
                this.DryRun1 = true;
                this.DryRun2 = true;
                this.DryRun3 = true;
                this.DryRun4 = true;
                this.DryRun5 = true;
                this.DryRun6 = true;
              }
              //preparing end
              //performing start
              //check on the connection start
              if (this.Wheeldatas[0].Performing[1].Checkontheconnections >= 25) {
                this.checkconnection1 = true;
                this.checkconnection2 = false;
                this.checkconnection3 = false;
                this.checkconnection4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Checkontheconnections >= 50) {
                this.checkconnection1 = true;
                this.checkconnection2 = true;
                this.checkconnection3 = false;
                this.checkconnection4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Checkontheconnections >= 75) {
                this.checkconnection1 = true;
                this.checkconnection2 = true;
                this.checkconnection3 = true;
                this.checkconnection4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Checkontheconnections >= 95) {
                this.checkconnection1 = true;
                this.checkconnection2 = true;
                this.checkconnection3 = true;
                this.checkconnection4 = true;
              }
              //check on the connection end
              //record the webinar start
              if (this.Wheeldatas[0].Performing[1].Recordthewebinar >= 25) {
                this.Recordtheweb1 = true;
                this.Recordtheweb2 = false;
                this.Recordtheweb3 = false;
                this.Recordtheweb4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Recordthewebinar >= 50) {
                this.Recordtheweb1 = true;
                this.Recordtheweb2 = true;
                this.Recordtheweb3 = false;
                this.Recordtheweb4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Recordthewebinar >= 75) {
                this.Recordtheweb1 = true;
                this.Recordtheweb2 = true;
                this.Recordtheweb3 = true;
                this.Recordtheweb4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Recordthewebinar >= 95) {
                this.Recordtheweb1 = true;
                this.Recordtheweb2 = true;
                this.Recordtheweb3 = true;
                this.Recordtheweb4 = true;
              }
              //record the webinar end
              //gather speaker in a call
              if (this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests >= 25) {
                this.Gatherspeaker1 = true;
                this.Gatherspeaker2 = false;
                this.Gatherspeaker3 = false;
                this.Gatherspeaker4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests >= 50) {
                this.Gatherspeaker1 = true;
                this.Gatherspeaker2 = true;
                this.Gatherspeaker3 = false;
                this.Gatherspeaker4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests >= 75) {
                this.Gatherspeaker1 = true;
                this.Gatherspeaker2 = true;
                this.Gatherspeaker3 = true;
                this.Gatherspeaker4 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests >= 95) {
                this.Gatherspeaker1 = true;
                this.Gatherspeaker2 = true;
                this.Gatherspeaker3 = true;
                this.Gatherspeaker4 = true;
              }
              //gather speaker in a call end
              //PROMOTE ON SOCIAL MEDIA 
              if (this.Wheeldatas[0].Performing[1].Promoteonsocialmedia >= 30) {
                this.Promoteonsocial1 = true;
                this.Promoteonsocial2 = false;
                this.Promoteonsocial3 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Promoteonsocialmedia >= 60) {
                this.Promoteonsocial1 = true;
                this.Promoteonsocial2 = true;
                this.Promoteonsocial3 = false;
              }
              if (this.Wheeldatas[0].Performing[1].Promoteonsocialmedia >= 90) {
                this.Promoteonsocial1 = true;
                this.Promoteonsocial2 = true;
                this.Promoteonsocial3 = true;
              }
              //PROMOTE ON SOCIAL MEDIA END
              //performing end
              //REVIEWING START
              //EVALUATE THE FEEDBACK START
              if (this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback >= 30) {
                this.Evaluatethefeed1 = true;
                this.Evaluatethefeed2 = false;
                this.Evaluatethefeed3 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback >= 60) {
                this.Evaluatethefeed1 = true;
                this.Evaluatethefeed2 = true;
                this.Evaluatethefeed3 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback >= 90) {
                this.Evaluatethefeed1 = true;
                this.Evaluatethefeed2 = true;
                this.Evaluatethefeed3 = true;
              }
              //EVALUATE THE FEEDBACK END
              //PLAN FOR THE NEXT WEBINAR 
              if (this.Wheeldatas[0].Reviewing[1].Planfornextwebinar >= 30) {
                this.Planfornext1 = true;
                this.Planfornext2 = false;
                this.Planfornext3 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Planfornextwebinar >= 60) {
                this.Planfornext1 = true;
                this.Planfornext2 = true;
                this.Planfornext3 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Planfornextwebinar >= 90) {
                this.Planfornext1 = true;
                this.Planfornext2 = true;
                this.Planfornext3 = true;
              }
              //PLAN FOR THE NEXT WEBINAR END
              //SENDING FEEDBACK
              if (this.Wheeldatas[0].Reviewing[1].Sendingfeedback >= 25) {
                this.Sending1 = true;
                this.Sending2 = false;
                this.Sending3 = false;
                this.Sending4 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Sendingfeedback >= 50) {
                this.Sending1 = true;
                this.Sending2 = true;
                this.Sending3 = false;
                this.Sending4 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Sendingfeedback >= 75) {
                this.Sending1 = true;
                this.Sending2 = true;
                this.Sending3 = true;
                this.Sending4 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Sendingfeedback >= 95) {
                this.Sending1 = true;
                this.Sending2 = true;
                this.Sending3 = true;
                this.Sending4 = true;
              }
              //SENDING FEEDBACK END 
              //•	Collecting the materials and sharing
              if (this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing >= 25) {
                this.CollectG1 = true;
                this.CollectG2 = false;
                this.CollectG3 = false;
                this.CollectG4 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing >= 50) {
                this.CollectG1 = true;
                this.CollectG2 = true;
                this.CollectG3 = false;
                this.CollectG4 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing >= 75) {
                this.CollectG1 = true;
                this.CollectG2 = true;
                this.CollectG3 = true;
                this.CollectG4 = false;
              }
              if (this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing >= 100) {
                this.CollectG1 = true;
                this.CollectG2 = true;
                this.CollectG3 = true;
                this.CollectG4 = true;
              }
              //•	Collecting the materials and sharing END
              // REVIEWING END 
  
            }
            else {
              this.Wheeldatas = this.service.getWheeldata();
              //planning Completed
              this.planningPercent = (Math.round((this.Wheeldatas[0].Planning[1].Decidingonthetopic + this.Wheeldatas[0].Planning[1].AssigningRoles + this.Wheeldatas[0].Planning[1].Recruitingthespeakers + this.Wheeldatas[0].Planning[1].Decidingontheplatform) * 100) / 100).toFixed(1);
              //Preparing Completed
              this.PreparingPercent = (Math.round((this.Wheeldatas[0].Preparing[1].Preparetheequipments + this.Wheeldatas[0].Preparing[1].SetupRegistration + this.Wheeldatas[0].Preparing[1].Marketing + this.Wheeldatas[0].Preparing[1].DryRun) * 100) / 100).toFixed(1);
              //Performing completed
              this.PerformingPercent = (Math.round((this.Wheeldatas[0].Performing[1].Checkontheconnections + this.Wheeldatas[0].Performing[1].Recordthewebinar + this.Wheeldatas[0].Performing[1].Promoteonsocialmedia + this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests) * 100) / 100).toFixed(1);
              //Reviewing Completed
              this.ReviewingPercent = (Math.round((this.Wheeldatas[0].Reviewing[1].Sendingfeedback + this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing + this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback + this.Wheeldatas[0].Reviewing[1].Planfornextwebinar) * 100) / 100).toFixed(1);
              //Over all Completed
              
              this.TotalHourse = 0 + ' ' + 'Sec';
              let plan = this.Wheeldatas[0].Planning[1].OverallPlanning;
              let prepare = this.Wheeldatas[0].Preparing[1].OverallPreparing;
              let perform = this.Wheeldatas[0].Performing[1].OverallPerforming;
              let review = this.Wheeldatas[0].Reviewing[1].OverallReviewing;
              let total = plan + prepare + perform + review;
              this.OverallPercent = (Math.round((total / 4) * 100) / 100).toFixed(1);
              this.apiService.create('webinarCompletedStatus', { Percent: this.OverallPercent, webId: this.WebinarID }).subscribe((response) => {
                if ((response as any).isSuccess) {
  
                  let da = 0;
                }
              })
            }
          }
        })
      },1000)
  
    });
    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));
    ////this.loading.present();
    this.apiService.getAll('getAllWebinar', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
      //this.loading.dismiss();
      if ((response as any).isSuccess) {
        this.details = (response as any).data;
        this.details.length;
        
      }
    })
  }
  async presentModal() {
    this.apiService.getAll('CollapseTime', { WebinarId: this.WebinarID }).subscribe(async (response) => {
      let UsedCollapse = (response as any).data;
      if (UsedCollapse[0].CollapsHelp == 0) {
        const macrohelp = await this.modalController.create({
          component: MacrohelpPage,
          cssClass: 'my-custom-class'
        });
        return await macrohelp.present();
      }
      else {
        const help = await this.modalController.create({
          component: HelpPage,
          cssClass: 'my-custom-class'
        });
        return await help.present();
      }
    });



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
  Collapse() {
    this.expandbtn = false;
    this.ExpandTrue = true;
    this.CollapseTrue = false;
    // $(document).ready(() => {
    //   $("#fadeIn").animate({
    //     top: '0px',
    //   });
    // });
    $(document).ready(() => {
      $("#fadeIn").addClass('rot1').removeClass('rot')
    });
  }

  Expand(event) {
    this.expandbtn = true;
    this.ExpandTrue = false;
    this.CollapseTrue = true;
    // $(document).ready(() => {
    //   $("#fadeIn").animate({
    //     top: '0px',
    //   });
    // });
    $(document).ready(() => {
      $("#fadeIn").addClass('rot').removeClass('rot1')
    });


  }
  RecruitBtn() {
    let data = this.cirecleValue;
    if (data != 'NoSelectNode') {
      this.route.navigate(['/webinarselect'], { queryParams: { NodeId: data, WebinarId: this.WebinarID, NodeCount: this.NodeValue, Wheeldatas: JSON.stringify(this.Wheeldatas), Webinartype: this.Webinartype } });
    }
  }
  yellowone(e) {
    this.yone = true;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.colorchange = true;
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;

  }
  yellowtwo(e) {
    this.yone = false;
    this.ytwo = true;
    this.ythree = false;
    this.yfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;

  }
  yellowthree(e) {
    this.yone = false;
    this.ytwo = false;
    this.ythree = true;
    this.yfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;

  }
  yellowfour(e) {
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = true;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;

  }
  blueone(e) {
    this.bone = true;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  bluetwo(e) {
    this.bone = false;
    this.btwo = true;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  bluethree(e) {
    this.bone = false;
    this.btwo = false;
    this.bthree = true;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  bluefour(e) {
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = true;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  greenone(e) {
    this.gone = true;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  greentwo(e) {
    this.gone = false;
    this.gtwo = true;
    this.gthree = false;
    this.gfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  greenthree(e) {
    this.gone = false;
    this.gtwo = false;
    this.gthree = true;
    this.gfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  greenfour(e) {
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = true;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //orange
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  orangeone(e) {
    this.oone = true;
    this.otwo = false;
    this.othree = false;
    this.ofour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;
  }
  orangetwo(e) {
    this.oone = false;
    this.otwo = true;
    this.othree = false;
    this.ofour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;

  }
  orangethree(e) {
    this.oone = false;
    this.otwo = false;
    this.othree = true;
    this.ofour = false;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;

  }
  orangefour(e) {
    this.oone = false;
    this.otwo = false;
    this.othree = false;
    this.ofour = true;
    //green
    this.gone = false;
    this.gtwo = false;
    this.gthree = false;
    this.gfour = false;
    //blue
    this.bone = false;
    this.btwo = false;
    this.bthree = false;
    this.bfour = false;
    //yellow
    this.yone = false;
    this.ytwo = false;
    this.ythree = false;
    this.yfour = false;
    //end
    this.cirecleValue = e.currentTarget.id;
    this.NodeValue = e.currentTarget.attributes.value.value;

  }
  // back(){
  //   this.route.navigate(['/webinarselect'],
  // }
}
