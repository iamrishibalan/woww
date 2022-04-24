import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { HelpPage } from '../help/help.page';
import { AppService } from '../shared/api-services/app.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
// import { LoadingService } from '../apiservice/loading.services';
import { AdminPage } from '../admin/admin.page';
import { UserPage } from '../user/user.page';
import { Wheeldata, Service } from '../../app/apiservice/staicdata';
import { PdfViewerService } from '../apiservice/pdf-viewer.service';
import { CONST } from '../../app/apiservice/api.constant';

let base: any;

@Component({
  selector: 'app-mywebinar',
  templateUrl: './mywebinar.page.html',
  styleUrls: ['./mywebinar.page.scss'],
  providers: [AppService, Service]
})
export class MywebinarPage implements OnInit, OnDestroy {
  public load = false;

  Wheeldatas: Wheeldata[];
  WebinarDetail: any = {};
  webinar: any[] = [];
  userDetail: any = {};
  details: Array<any> = [];
  apiUrl: any;
  FeedBackdata: any = 0;
  webinarStatusCount: any;
  content: boolean = false;
  DataDetail: any = {};
  webinarUserDetail: any;
  rightCount: any = 0;
  wrongCount: any = 0;
  planrating: any = 0;
  preparerating: any = 0;
  performrating: any = 0;
  reviewrating: any = 0;
  Webinar: any;
  datass: any = 0;
  registerid: any;
  RegisterUser: any;
  GuestUser: any;

  constructor(private socialSharing: SocialSharing, private toastCtrl: ToastController, public service: Service, private pdf: PdfViewerService, public activatedRoute: ActivatedRoute, private route: Router, public modalController: ModalController, public alertCtrl: AlertController, public apiService: AppService) {
    localStorage.removeItem('ExitApp');
    this.apiUrl = CONST.API;
    this.activatedRoute.queryParams.subscribe((res) => {
      let idd = res.UserId
      setTimeout(() => {
        this.apiService.getAll('getAllWebinar', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
          if ((response as any).isSuccess) {
            // this.loading.dismiss();
            this.details = (response as any).data;
          }
          else {
            // this.loading.dismiss();
          }
        })
      }, 1000)

      setTimeout(() => {
        this.apiService.getAll('ViewWebinarDetail', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
          if ((response as any).isSuccess) {
            this.webinarUserDetail = (response as any).data1[0];
            let Fullwebinar = (response as any).data;
          }
          else {
            // this.loading.dismiss();
          }

        })
      }, 1000)

    });
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnDestroy() {
    // this.alertCtrl.create({
    //   cssClass: 'my-offline', 
    //   message: '<ion-icon class="ialert" src="../../assets/img/33.svg"></ion-icon> <h2>You’re offline</h2> <p>Result will be available once you’re online again. You’ll get notified when they’re ready.</p>',  
    //   buttons: [{
    //     text: 'Retry',
    //     role: 'ok',
    //     cssClass: 'okey'
    //   }]
    // }).then(res => {
    //   res.present();
    // });
  }

  async ngOnInit() {

    // this.alertCtrl.create({
    //   cssClass: 'my-user', 
    //   message: '<ion-icon class="ialert" src="../../assets/img/32.svg"></ion-icon> <h2>Welcome Back <b>Veerabathran R</b></h2> <h3>Continue were you left</h3>',  
    //   buttons: [{
    //     text: 'Cancel',
    //     role: 'cancel',
    //     cssClass: 'cancel',
    //   },{
    //     text: 'Ok Gotit',
    //     role: 'ok',
    //     cssClass: 'okey'
    //   }]
    // }).then(res => {
    //   res.present();
    // });
    this.Wheeldatas = this.service.getWheeldata();
    this.DataDetail = this.Wheeldatas[0];
    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));
    // this.loading.present();
    this.load = true;
    setTimeout(() => {
      this.apiService.getAll('getAllWebinar', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          // this.loading.dismiss();
          this.load = false;
          this.details = (response as any).data;
        }
        else {
          this.load = false;
          // this.loading.dismiss();
        }
      })
    }, 1000)

    setTimeout(() => {
      this.apiService.getAll('ViewWebinarDetail', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          this.webinarUserDetail = (response as any).data1[0];
          let Fullwebinar = (response as any).data;
        }
        else {
          // this.loading.dismiss();
        }
      });
    }, 1000)
  }
  userwebinar() {
    this.route.navigate(['/createwebinar']);
  }
  adminwebinar() {
    this.route.navigate(['/admin-webinar']);
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
  Delete(id, type) {
    this.apiService.create('DeleteWebinar', { WebinarId: id, Webinartype: type }).subscribe((response) => {

      if ((response as any).isSuccess) {
        let data = (response as any).data;
        this.ngOnInit();
        this.presentToast("deleted successfully");
      }

    })
  }

  ChooseWebinar(id, type) {
    this.apiService.getAll('UsedTime', { WebinarId: id }).subscribe((response) => {
      let UsedtimeWeb = (response as any).data;
      if (UsedtimeWeb[0].UsedTime == 0) {
        this.route.navigate(['/introduction'], { queryParams: { WebinarId: id, Webinartype: type, UserId: this.userDetail.reg_Id }, });
        localStorage.setItem("need", UsedtimeWeb);
      }
      else {
        this.route.navigate(['/collapse'], { queryParams: { WebinarId: id, Webinartype: type, UserId: this.userDetail.reg_Id } });
      }
    })


  }

  shared(WebinarId, UserId) {
    this.load = true;
    this.apiService.create('getsharedetails', { Webinarid: WebinarId, Userid: UserId }).subscribe(async (response) => {
      if ((response as any).isSuccess) {
        let result = (await response as any).data;
        this.webinarStatusCount = (await response as any).data1;
        if (result == 'Empty') {
          this.Wheeldatas = this.service.getWheeldata();
          this.DataDetail = await this.Wheeldatas[0];

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

          let htmldoc = document.getElementById("demo").innerHTML;
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

        }, 1000);
      }
    });
  }
  download(WebinarId, UserID, user_Type, email) {
    
    sessionStorage.setItem("feedbacked", "0");
    this.registerid = 0;
    this.Webinar = 0;
    // this.WebinarDetail = 0;
    this.webinarStatusCount = 0;
    // this.Wheeldatas = [];
    // this.DataDetail = 0;
    this.rightCount = 0;
    this.wrongCount = 0;
    this.apiService.create('getSingleWebinarDetail', { WebinarId: WebinarId }).subscribe((response) => {
      if ((response as any).isSuccess) {
        this.WebinarDetail = (response as any).data[0];
      }
      if (this.WebinarDetail.Webinar_PerforRate != '0' && this.WebinarDetail.Webinar_PlanRate != '0' && this.WebinarDetail.Webinar_PreparRate != '0' && this.WebinarDetail.Webinar_ReviewRate != '0' && this.WebinarDetail.Webinar_Totalusefull != '0') {
        this.load = true;
        this.apiService.create('getDetails', { Webinarid: WebinarId, Userid: UserID }).subscribe(async (response) => {
          if ((response as any).isSuccess) {
            let result = (await response as any).data;
            this.webinarStatusCount = (await response as any).data1;
            if (result == 'Empty') {
              this.Wheeldatas = this.service.getWheeldata();
              this.DataDetail = this.Wheeldatas[0];
            }
            else {
              this.Wheeldatas = JSON.parse(result[0].web_data);
              this.DataDetail = this.Wheeldatas[0];
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

              let htmldoc = document.getElementById("demo").innerHTML;
              this.apiService.create('PdfOption', { downloadpdf: JSON.stringify(htmldoc) }).subscribe((response) => {
                if ((response as any).isSuccess) {
                  this.load = false;
                  let data = (response as any).data;
                  let title = "Wow_"+this.WebinarDetail.webinar_Title;
                  this.pdf.download(this.apiUrl + 'getPdffilePath/' + data + '.pdf', title);
                  // window.open(this.apiUrl + 'getPdffilePath/' + data + '.pdf', title);

                }
                else {
                
                }

              })

            }, 3000);
          }
        });
      }
      else {
        this.route.navigate(['/feedback'], { queryParams: { WebinarId: WebinarId } });
        this.activatedRoute.queryParams.subscribe((res) => {
          this.Webinar = res.WebinarIddd;
          this.registerid = res.UserId;
          this.datass = sessionStorage.getItem("feedbacked");
          if (this.datass == 1) {
            this.load = true;
            this.apiService.create('getDetails', { Webinarid: this.Webinar, Userid: this.registerid }).subscribe(async (response) => {
              if ((response as any).isSuccess) {
                let result = (await response as any).data;
                this.webinarStatusCount = (await response as any).data1;
                if (result == 'Empty') {
                  this.Wheeldatas = this.service.getWheeldata();
                  this.DataDetail = this.Wheeldatas[0];
                }
                else {
                  this.Wheeldatas = JSON.parse(result[0].web_data);
                  this.DataDetail = this.Wheeldatas[0];
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

                  let htmldoc = document.getElementById("demo").innerHTML;
                  this.apiService.create('PdfOption', { downloadpdf: JSON.stringify(htmldoc) }).subscribe((response) => {
                    if ((response as any).isSuccess) {
                      this.load = false;
                      let data = (response as any).data;
                      let title = "Wow_"+this.WebinarDetail.webinar_Title;
                      this.pdf.download(this.apiUrl + 'getPdffilePath/' + data + '.pdf', title);
                      // window.open(this.apiUrl + 'getPdffilePath/' + data + '.pdf', title);
                      sessionStorage.removeItem("feedbacked");
                    }
                    else {
                    
                    }

                  })

                }, 3000);
              }
            });
          }

        });
      }
    });

  }
}
