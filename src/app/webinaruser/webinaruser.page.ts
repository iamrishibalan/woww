import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { LogsPage } from '../logs/logs.page'
import { FeedbackAdminPage } from '../feedback-admin/feedback-admin.page';
import { AppService } from '../shared/api-services/app.service'
import { Router } from '@angular/router';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { CONST } from '../../app/apiservice/api.constant';
import { Wheeldata, Service } from '../../app/apiservice/staicdata';
// import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { LoadingService } from '../apiservice/loading.services';
import { PdfViewerService } from '../apiservice/pdf-viewer.service';

@Component({
  selector: 'app-webinaruser',
  templateUrl: './webinaruser.page.html',
  styleUrls: ['./webinaruser.page.scss'],
  providers: [AppService, Service]

})
export class WebinaruserPage implements OnInit {
  public load = false;
  Wheeldatas: Wheeldata[];
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
  apiUrl: any;
  pdfurl: any;
  TotalCountt: any;
  rightCount: any = 0;
  wrongCount: any = 0;
  constructor(public loading: LoadingService,private pdf: PdfViewerService, private platform: Platform, private socialSharing: SocialSharing, public menuCtrl: MenuController, public modalController: ModalController, public apiService: AppService, private route: Router, public service: Service) {
    this.apiUrl = CONST.API;
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
    this.Wheeldatas = this.service.getWheeldata();
    this.DataDetail = this.Wheeldatas[0];
   
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
            this.load  =false;
          },2000)
          
  
        }
      })
    },2000);
   
    setTimeout(()=>{
      this.load = true;
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
            this.load = false;
          },2000)
          
  
        }
      })
    },2000);
   
  }

async downloadPDF(UserId, WebinarId) {
  this.load = true;
    this.apiService.create('getPdfDetails', { Userid: UserId, Webinarid: WebinarId }).subscribe(async (response) => {
      if ((response as any).isSuccess) {
        let result = ( await response as any).data;
        this.webinarStatusCount = ( await response as any).data1;
        if (result == 'Empty') {
          this.Wheeldatas = this.service.getWheeldata();
          this.DataDetail = this.Wheeldatas[0];

        }
        else {
          this.Wheeldatas = JSON.parse(result[0].web_data);
          this.DataDetail = await this.Wheeldatas[0];

          this.rightCount = 0;
          this.wrongCount = 0;
          let Plandecide = this.DataDetail.Planning[0].Decidingonthetopic;
          let Planassign = this.DataDetail.Planning[0].AssigningRoles;
          let Planrecruit = this.DataDetail.Planning[0].Recruitingthespeakers;
          let Planplatform = this.DataDetail.Planning[0].Decidingontheplatform;
          let PrepareEquipementsss = this.DataDetail.Preparing[0].Preparetheequipments;
          let PrepareSetupss = this.DataDetail.Preparing[0].SetupRegistration;
          let PrepareMarketss = this.DataDetail.Preparing[0].Marketing;
          let PrepareDryrunss = this.DataDetail.Preparing[0].DryRun;
          let PerformingConnetss = this.DataDetail.Performing[0].Checkontheconnections;
          let Performingrecordss = this.DataDetail.Performing[0].Recordthewebinar;
          let Performingsocialss = this.DataDetail.Performing[0].Promoteonsocialmedia;
          let Performingguestss = this.DataDetail.Performing[0].Gatherspeakerandcallinguests;
          let Reviewingsendingss = this.DataDetail.Reviewing[0].Sendingfeedback;
          let Reviewingcollectss = this.DataDetail.Reviewing[0].Collectingthematerialsandsharing;
          let Reviewingfeedbackss = this.DataDetail.Reviewing[0].Evaluatethefeedback;
          let Reviewingplannextss = this.DataDetail.Reviewing[0].Planfornextwebinar;


          for (let i = 0; i < Plandecide.length; i++) {
            if (Plandecide[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Planassign.length; i++) {
            if (Planassign[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Planrecruit.length; i++) {
            if (Planrecruit[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Planplatform.length; i++) {
            if (Planplatform[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareEquipementsss.length; i++) {
            if (PrepareEquipementsss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareSetupss.length; i++) {
            if (PrepareSetupss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareMarketss.length; i++) {
            if (PrepareMarketss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareDryrunss.length; i++) {
            if (PrepareDryrunss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PerformingConnetss.length; i++) {
            if (PerformingConnetss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Performingrecordss.length; i++) {
            if (Performingrecordss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Performingsocialss.length; i++) {
            if (Performingsocialss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Performingguestss.length; i++) {
            if (Performingguestss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingsendingss.length; i++) {
            if (Reviewingsendingss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingcollectss.length; i++) {
            if (Reviewingcollectss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingfeedbackss.length; i++) {
            if (Reviewingfeedbackss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingplannextss.length; i++) {
            if (Reviewingplannextss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }          
        }
        setTimeout(() => {
         
          let  htmldoc =  document.getElementById("demo").innerHTML;
          this.apiService.create('PdfOption', { downloadpdf: JSON.stringify(htmldoc) }).subscribe((response) => {
            if ((response as any).isSuccess) {
              this.load = false;
              let data = (response as any).data;
              let title='wowpdf';
              this.pdf.download(this.apiUrl + 'getPdffilePath/' + data + '.pdf',title);
              // window.open(this.apiUrl + 'getPdffilePath/' + data + '.pdf',title);
            }
            else {
            
            }
      
          })
          
        }, 2000);

      }
    });
  
  }

 async shared(UserId, WebinarId) {
  this.load = true;
    this.apiService.create('getPdfshareDetails', { Userid: UserId, Webinarid: WebinarId }).subscribe(async (response) => {
      if ((response as any).isSuccess) {
        let result = ( await response as any).data;
        this.webinarStatusCount = ( await response as any).data1;
        if (result == 'Empty') {
          this.Wheeldatas = this.service.getWheeldata();
          this.DataDetail = this.Wheeldatas[0];

        }
        else {
          this.Wheeldatas = JSON.parse(result[0].web_data);
          this.DataDetail = await this.Wheeldatas[0];

          this.rightCount = 0;
          this.wrongCount = 0;
          let Plandecide = this.DataDetail.Planning[0].Decidingonthetopic;
          let Planassign = this.DataDetail.Planning[0].AssigningRoles;
          let Planrecruit = this.DataDetail.Planning[0].Recruitingthespeakers;
          let Planplatform = this.DataDetail.Planning[0].Decidingontheplatform;
          let PrepareEquipementsss = this.DataDetail.Preparing[0].Preparetheequipments;
          let PrepareSetupss = this.DataDetail.Preparing[0].SetupRegistration;
          let PrepareMarketss = this.DataDetail.Preparing[0].Marketing;
          let PrepareDryrunss = this.DataDetail.Preparing[0].DryRun;
          let PerformingConnetss = this.DataDetail.Performing[0].Checkontheconnections;
          let Performingrecordss = this.DataDetail.Performing[0].Recordthewebinar;
          let Performingsocialss = this.DataDetail.Performing[0].Promoteonsocialmedia;
          let Performingguestss = this.DataDetail.Performing[0].Gatherspeakerandcallinguests;
          let Reviewingsendingss = this.DataDetail.Reviewing[0].Sendingfeedback;
          let Reviewingcollectss = this.DataDetail.Reviewing[0].Collectingthematerialsandsharing;
          let Reviewingfeedbackss = this.DataDetail.Reviewing[0].Evaluatethefeedback;
          let Reviewingplannextss = this.DataDetail.Reviewing[0].Planfornextwebinar;


          for (let i = 0; i < Plandecide.length; i++) {
            if (Plandecide[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Planassign.length; i++) {
            if (Planassign[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Planrecruit.length; i++) {
            if (Planrecruit[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Planplatform.length; i++) {
            if (Planplatform[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareEquipementsss.length; i++) {
            if (PrepareEquipementsss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareSetupss.length; i++) {
            if (PrepareSetupss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareMarketss.length; i++) {
            if (PrepareMarketss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PrepareDryrunss.length; i++) {
            if (PrepareDryrunss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < PerformingConnetss.length; i++) {
            if (PerformingConnetss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Performingrecordss.length; i++) {
            if (Performingrecordss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Performingsocialss.length; i++) {
            if (Performingsocialss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Performingguestss.length; i++) {
            if (Performingguestss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingsendingss.length; i++) {
            if (Reviewingsendingss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingcollectss.length; i++) {
            if (Reviewingcollectss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingfeedbackss.length; i++) {
            if (Reviewingfeedbackss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }
          for (let i = 0; i < Reviewingplannextss.length; i++) {
            if (Reviewingplannextss[i].Action == true) {
              this.rightCount = this.rightCount + 1;
            }
            else {
              this.wrongCount = this.wrongCount + 1;
            }
          }          
        }
        setTimeout(() => {
          
          let  htmldoc =  document.getElementById("demo").innerHTML;
          this.apiService.create('PdfOption', { downloadpdf: JSON.stringify(htmldoc) }).subscribe((response) => {
            if ((response as any).isSuccess) {
              this.load = false;
              let data = (response as any).data;
              var options = {
                chooserTitle: 'Webinar Pdf Details',
                files: ['', ''],
                url: (this.apiUrl + 'getPdffilePath/' + data + '.pdf'),
              };
              this.socialSharing.shareWithOptions(options)
            }
            else {
           
            }
      
          })
          
        }, 2000);

      }
    });
   
  }
  dismiss() {
    this.route.navigate(['/admin-records']);
  }
  filter() {

    this.isDisabled = !this.isDisabled;
  }
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

  // async feedbackadmin() {
  //   this.modalController.dismiss({
  //     'dismissed': true
  //   });
  //   const Page = await this.modalController.create({
  //     component: FeedbackAdminPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await Page.present();
  // }

}
