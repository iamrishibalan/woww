import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AppService } from '../shared/api-services/app.service';
import { FormGroup, FormControl } from '@angular/forms';

let base;
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  providers: [AppService]

})
export class FeedbackPage implements OnInit {
  WebinarID: any;

  Webinartype: any;
  WebinarDetail: any = {};
  Wheeldatas: any;
  planningPercent: any;
  PreparingPercent: number;
  PerformingPercent: number;
  ReviewingPercent: number;
  OverallPercent: any;
  Eplan: boolean = false;
  Eperfor: boolean = false;
  Eprepare: boolean = false;
  EReview: boolean = false;
  planSR1: boolean = false;
  planSR2: boolean = false;
  planSR3: boolean = false;
  planSR4: boolean = false;
  planSR5: boolean = false;
  planningRatingCount: any = 0;
  preparingRatingCount: any = 0;
  performingRatingCount: any = 0;
  reviewRatingCount: any = 0;
  OeverAllRate: any = 0;
  totalusefullCount: any = 0;
  preSR1: boolean = false;
  preSR2: boolean = false;
  preSR3: boolean = false;
  preSR4: boolean = false;
  preSR5: boolean = false;
  performingSR1: boolean = false;
  performingSR2: boolean = false;
  performingSR3: boolean = false;
  performingSR4: boolean = false;
  performingSR5: boolean = false;
  reviewSR1: boolean = false;
  reviewSR2: boolean = false;
  reviewSR3: boolean = false;
  reviewSR4: boolean = false;
  reviewSR5: boolean = false;
  Usefull1: boolean = false;
  Usefull2: boolean = false;
  Usefull3: boolean = false;
  Usefull4: boolean = false;
  Usefull5: boolean = false;
  WebinarId: any;
  feedbackdata: any;
  Webinartypes: any;
  profileForm: FormGroup;
  userid: any;
  constructor(public modalController: ModalController, private route: Router, public alertCtrl: AlertController, public activatedRoute: ActivatedRoute, public apiService: AppService,) {
    base = this;
    localStorage.removeItem('ExitApp');
    this.activatedRoute.queryParams.subscribe((res) => {
      this.WebinarId = res.WebinarId;
      this.Webinartypes = res.Webinartype;
    });
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      FeedBack: new FormControl('')
    });
    // this.activatedRoute.queryParams.subscribe((res) => {
    //   let rate1 = res.planRate;
    //   let rate2 = res.prepareRate;
    //   let rate3 = res.performRate;
    //   let rate4 = res.reviewRate;
    //   let webid = res.webinar_id;
    //   this.apiService.create('getSingleWebinarDetail', { WebinarId: webid }).subscribe((response) => {
    //     if ((response as any).isSuccess) {
    //       base.WebinarDetail = (response as any).data[0];
    //       this.userid = this.WebinarDetail.webinar_RegUserId;
    //        
    //     }
    //   })
    // });
    this.WebinarID = 0;
    this.activatedRoute.queryParams.subscribe((res) => {
      this.WebinarID = res.WebinarId;
      this.Webinartype = res.Webinartype;
      this.apiService.create('getSingleWebinarDetail', { WebinarId: this.WebinarID }).subscribe((response) => {
        if ((response as any).isSuccess) {
          base.WebinarDetail = (response as any).data[0];
          this.userid = this.WebinarDetail.webinar_RegUserId;
          let webinarStatus = (response as any).data1;
          if (webinarStatus != 'No Record') {
            this.Wheeldatas = JSON.parse(webinarStatus[0].web_data);

            //planning Completed
            this.planningPercent = (Math.round(((this.Wheeldatas[0].Planning[1].Decidingonthetopic + this.Wheeldatas[0].Planning[1].AssigningRoles + this.Wheeldatas[0].Planning[1].Recruitingthespeakers + this.Wheeldatas[0].Planning[1].Decidingontheplatform) / 4) * 100) / 100).toFixed(2);
            //Preparing Completed
            this.PreparingPercent = (this.Wheeldatas[0].Preparing[1].Preparetheequipments + this.Wheeldatas[0].Preparing[1].SetupRegistration + this.Wheeldatas[0].Preparing[1].Marketing + this.Wheeldatas[0].Preparing[1].DryRun) / 4;
            //Performing completed
            this.PerformingPercent = (this.Wheeldatas[0].Performing[1].Checkontheconnections + this.Wheeldatas[0].Performing[1].Recordthewebinar + this.Wheeldatas[0].Performing[1].Promoteonsocialmedia + this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests) / 4;
            //Reviewing Completed
            this.ReviewingPercent = (this.Wheeldatas[0].Reviewing[1].Sendingfeedback + this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing + this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback + this.Wheeldatas[0].Reviewing[1].Planfornextwebinar) / 4;
          }
          if (base.WebinarDetail.Webinar_PlanRate != '' && base.WebinarDetail.Webinar_PlanRate != null) {
            this.profileForm.patchValue({
              FeedBack: base.WebinarDetail.Webinar_RateCmd
            })
            if (base.WebinarDetail.Webinar_PlanRate != '0') {
              this.Planning();
              if (base.WebinarDetail.Webinar_PlanRate == '1') {
                this.PlanSR1();
              }
              if (base.WebinarDetail.Webinar_PlanRate == '2') {
                this.PlanSR2();
              }
              if (base.WebinarDetail.Webinar_PlanRate == '3') {
                this.PlanSR3();
              }
              if (base.WebinarDetail.Webinar_PlanRate == '4') {
                this.PlanSR4();
              }
              if (base.WebinarDetail.Webinar_PlanRate == '5') {
                this.PlanSR5();
              }
            }
            if (base.WebinarDetail.Webinar_PreparRate != '0') {
              this.Preparing();
              if (base.WebinarDetail.Webinar_PreparRate == '1') {
                this.PreSR1();
              }
              if (base.WebinarDetail.Webinar_PreparRate == '2') {
                this.PreSR2();
              }
              if (base.WebinarDetail.Webinar_PreparRate == '3') {
                this.PreSR3();
              }
              if (base.WebinarDetail.Webinar_PreparRate == '4') {
                this.PreSR4();
              }
              if (base.WebinarDetail.Webinar_PreparRate == '5') {
                this.PreSR5();
              }
            }
            if (base.WebinarDetail.Webinar_PerforRate != '0') {
              this.Performing();
              if (base.WebinarDetail.Webinar_PerforRate == '1') {
                this.PerformingSR1();
              }
              if (base.WebinarDetail.Webinar_PerforRate == '2') {
                this.PerformingSR2();
              }
              if (base.WebinarDetail.Webinar_PerforRate == '3') {
                this.PerformingSR3();
              }
              if (base.WebinarDetail.Webinar_PerforRate == '4') {
                this.PerformingSR4();
              }
              if (base.WebinarDetail.Webinar_PerforRate == '5') {
                this.PerformingSR5();
              }
            }
            if (base.WebinarDetail.Webinar_ReviewRate != '0') {
              this.Reviewing();
              if (base.WebinarDetail.Webinar_ReviewRate == '1') {
                this.ReviewSR1();
              }
              if (base.WebinarDetail.Webinar_ReviewRate == '2') {
                this.ReviewSR2();
              }
              if (base.WebinarDetail.Webinar_ReviewRate == '3') {
                this.ReviewSR3();
              }
              if (base.WebinarDetail.Webinar_ReviewRate == '4') {
                this.ReviewSR4();
              }
              if (base.WebinarDetail.Webinar_ReviewRate == '5') {
                this.ReviewSR5();
              }
            }
            if (base.WebinarDetail.Webinar_Totalusefull != '0') {
              this.usefullnesss();
              if (base.WebinarDetail.Webinar_Totalusefull == '1') {
                this.usefullnesss1();
              }
              if (base.WebinarDetail.Webinar_Totalusefull == '2') {
                this.usefullnesss2();
              }
              if (base.WebinarDetail.Webinar_Totalusefull == '3') {
                this.usefullnesss3();
              }
              if (base.WebinarDetail.Webinar_Totalusefull == '4') {
                this.usefullnesss4();
              }
              if (base.WebinarDetail.Webinar_Totalusefull == '5') {
                this.usefullnesss5();
              }

            }
          }
        }
      })
    });
  }
  Planning() {
    if (this.planningPercent == 0 && this.planningPercent != undefined) {
      this.Eplan = true;
      this.Eprepare = false;
      this.Eperfor = false;
      this.EReview = false;
    }
    else {
      this.Eplan = false;
      this.Eprepare = false;
      this.Eperfor = false;
      this.EReview = false;
    }
  }
  Preparing() {
    if (this.PreparingPercent == 0 && this.PreparingPercent != undefined) {
      this.Eplan = false;
      this.Eprepare = true;
      this.Eperfor = false;
      this.EReview = false;
    }
    else {
      this.Eplan = false;
      this.Eprepare = false;
      this.Eperfor = false;
      this.EReview = false;
    }
  }
  Performing() {
    if (this.PerformingPercent == 0 && this.PerformingPercent != undefined) {
      this.Eplan = false;
      this.Eprepare = false;
      this.Eperfor = true;
      this.EReview = false;
    }
    else {
      this.Eplan = false;
      this.Eprepare = false;
      this.Eperfor = false;
      this.EReview = false;
    }
  }
  Reviewing() {
    if (this.ReviewingPercent == 0 && this.ReviewingPercent != undefined) {
      this.Eplan = false;
      this.Eprepare = false;
      this.Eperfor = false;
      this.EReview = true;
    }
    else {
      this.Eplan = false;
      this.Eprepare = false;
      this.Eperfor = false;
      this.EReview = false;
    }
  }
  usefullnesss() {

  }
  feedback() {
    this.route.navigate(['/createwebinar']);
  }
  dismiss() {
    this.route.navigate(['/mywebinar']);
  }
  async Alert() {
    sessionStorage.setItem("feedbacked", "1");
    // this.feedbackdata = 1;
    let mail = base.WebinarDetail.webinar_Email;
    let testConetent = this.profileForm.value.FeedBack;
    this.apiService.create('SendFeedback',
      {
        planningRatting: this.planningRatingCount,
        preparingRatting: this.preparingRatingCount,
        performingRatting: this.performingRatingCount,
        reviewRatting: this.reviewRatingCount,
        RattingComments: testConetent,
        WebinarID: this.WebinarID,
        OverAllRating: this.OeverAllRate,
        TotalUseFullStar: this.totalusefullCount
      }).subscribe(async (response) => {
        if ((response as any).isSuccess) {
          const alert = await this.alertCtrl.create({
            cssClass: 'my-custom',
            header: 'Thank You !',
            message: 'for your Valuable Feedback and your INSIGHT Downloaded Successfully.',
            buttons: [{
              text: 'Okey',
              role: 'cancel',
              cssClass: 'okey'
            }]
          });
           
          this.route.navigate(['/mywebinar'], { queryParams: { WebinarIddd: this.WebinarId, UserId: this.userid } });
          await alert.present();
        }
      });
  }
  //planning 
  PlanSR1() {
    if (this.planningPercent != 0 && this.planningPercent != undefined) {
      if (this.planSR1 == false) {
        this.planningRatingCount = 1;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
         
        this.planSR1 = true;
        this.planSR2 = false;
        this.planSR3 = false;
        this.planSR4 = false;
        this.planSR5 = false;
      }
    }
  }
  PlanSR2() {
    if (this.planningPercent != 0 && this.planningPercent != undefined) {
      if (this.planSR2 == false) {
        this.planningRatingCount = 2;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.planSR1 = true;
        this.planSR2 = true;
        this.planSR3 = false;
        this.planSR4 = false;
        this.planSR5 = false;
      }
    }
  }
  PlanSR3() {
    if (this.planningPercent != 0 && this.planningPercent != undefined) {
      if (this.planSR3 == false) {
        this.planningRatingCount = 3;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.planSR1 = true;
        this.planSR2 = true;
        this.planSR3 = true;
        this.planSR4 = false;
        this.planSR5 = false;
      }
    }
  }
  PlanSR4() {
    if (this.planningPercent != 0 && this.planningPercent != undefined) {
      if (this.planSR4 == false) {
        this.planningRatingCount = 4;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.planSR1 = true;
        this.planSR2 = true;
        this.planSR3 = true;
        this.planSR4 = true;
        this.planSR5 = false;
      }
    }
  }
  PlanSR5() {
    if (this.planningPercent != 0 && this.planningPercent != undefined) {
      if (this.planSR5 == false) {
        this.planningRatingCount = 5;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.planSR1 = true;
        this.planSR2 = true;
        this.planSR3 = true;
        this.planSR4 = true;
        this.planSR5 = true;
      }
    }
  }
  //planning End
  //preparing
  PreSR1() {
    if (this.PreparingPercent != 0 && this.PreparingPercent != undefined) {
      if (this.preSR1 == false) {
        this.preparingRatingCount = 1;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.preSR1 = true;
        this.preSR2 = false;
        this.preSR3 = false;
        this.preSR4 = false;
        this.preSR5 = false;
      }
    }
  }
  PreSR2() {
    if (this.PreparingPercent != 0 && this.PreparingPercent != undefined) {
      if (this.preSR2 == false) {
        this.preparingRatingCount = 2;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.preSR1 = true;
        this.preSR2 = true;
        this.preSR3 = false;
        this.preSR4 = false;
        this.preSR5 = false;
      }
    }
  }
  PreSR3() {
    if (this.PreparingPercent != 0 && this.PreparingPercent != undefined) {
      if (this.preSR3 == false) {
        this.preparingRatingCount = 3;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.preSR1 = true;
        this.preSR2 = true;
        this.preSR3 = true;
        this.preSR4 = false;
        this.preSR5 = false;
      }
    }
  }
  PreSR4() {
    if (this.PreparingPercent != 0 && this.PreparingPercent != undefined) {
      if (this.preSR4 == false) {
        this.preparingRatingCount = 4;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.preSR1 = true;
        this.preSR2 = true;
        this.preSR3 = true;
        this.preSR4 = true;
        this.preSR5 = false;
      }
    }
  }
  PreSR5() {
    if (this.PreparingPercent != 0 && this.PreparingPercent != undefined) {
      if (this.preSR5 == false) {
        this.preparingRatingCount = 5;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.preSR1 = true;
        this.preSR2 = true;
        this.preSR3 = true;
        this.preSR4 = true;
        this.preSR5 = true;
      }
    }
  }
  //preparing End
  //Performing Phase
  PerformingSR1() {
    if (this.PerformingPercent != 0 && this.PerformingPercent != undefined) {
      if (this.performingSR1 == false) {
        this.performingRatingCount = 1;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.performingSR1 = true;
        this.performingSR2 = false;
        this.performingSR3 = false;
        this.performingSR4 = false;
        this.performingSR5 = false;
      }
    }

  }
  PerformingSR2() {
    if (this.PerformingPercent != 0 && this.PerformingPercent != undefined) {
      if (this.performingSR2 == false) {
        this.performingRatingCount = 2;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.performingSR1 = true;
        this.performingSR2 = true;
        this.performingSR3 = false;
        this.performingSR4 = false;
        this.performingSR5 = false;
      }
    }
  }
  PerformingSR3() {
    if (this.PerformingPercent != 0 && this.PerformingPercent != undefined) {
      if (this.performingSR3 == false) {
        this.performingRatingCount = 3;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.performingSR1 = true;
        this.performingSR2 = true;
        this.performingSR3 = true;
        this.performingSR4 = false;
        this.performingSR5 = false;
      }
    }
  }
  PerformingSR4() {
    if (this.PerformingPercent != 0 && this.PerformingPercent != undefined) {
      if (this.performingSR4 == false) {
        this.performingRatingCount = 4;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.performingSR1 = true;
        this.performingSR2 = true;
        this.performingSR3 = true;
        this.performingSR4 = true;
        this.performingSR5 = false;
      }
    }
  }
  PerformingSR5() {
    if (this.PerformingPercent != 0 && this.PerformingPercent != undefined) {
      if (this.performingSR5 == false) {
        this.performingRatingCount = 5;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.performingSR1 = true;
        this.performingSR2 = true;
        this.performingSR3 = true;
        this.performingSR4 = true;
        this.performingSR5 = true;
      }
    }
  }
  //Performing End
  //Reviewing Phase
  ReviewSR1() {
    if (this.ReviewingPercent != 0 && this.ReviewingPercent != undefined) {
      if (this.reviewSR1 == false) {
        this.reviewRatingCount = 1;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.reviewSR1 = true;
        this.reviewSR2 = false;
        this.reviewSR3 = false;
        this.reviewSR4 = false;
        this.reviewSR5 = false;
      }
    }
  }
  ReviewSR2() {
    if (this.ReviewingPercent != 0 && this.ReviewingPercent != undefined) {
      if (this.reviewSR2 == false) {
        this.reviewRatingCount = 2;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.reviewSR1 = true;
        this.reviewSR2 = true;
        this.reviewSR3 = false;
        this.reviewSR4 = false;
        this.reviewSR5 = false;
      }
    }
  }
  ReviewSR3() {
    if (this.ReviewingPercent != 0 && this.ReviewingPercent != undefined) {
      if (this.reviewSR3 == false) {
        this.reviewRatingCount = 3;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.reviewSR1 = true;
        this.reviewSR2 = true;
        this.reviewSR3 = true;
        this.reviewSR4 = false;
        this.reviewSR5 = false;
      }
    }
  }
  ReviewSR4() {
    if (this.ReviewingPercent != 0 && this.ReviewingPercent != undefined) {
      if (this.reviewSR4 == false) {
        this.reviewRatingCount = 4;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.reviewSR1 = true;
        this.reviewSR2 = true;
        this.reviewSR3 = true;
        this.reviewSR4 = true;
        this.reviewSR5 = false;
      }
    }
  }
  ReviewSR5() {
    if (this.ReviewingPercent != 0 && this.ReviewingPercent != undefined) {
      if (this.reviewSR5 == false) {
        this.reviewRatingCount = 5;
        this.OeverAllRate = (Math.round(((this.planningRatingCount + this.preparingRatingCount + this.performingRatingCount + this.reviewRatingCount) / 4) * 10) / 10).toFixed(1);
        this.reviewSR1 = true;
        this.reviewSR2 = true;
        this.reviewSR3 = true;
        this.reviewSR4 = true;
        this.reviewSR5 = true;
      }
    }
  }

  usefullnesss1() {
    this.totalusefullCount = 1;
    this.Usefull1 = true;
    this.Usefull2 = false;
    this.Usefull3 = false;
    this.Usefull4 = false;
    this.Usefull5 = false;
  }
  usefullnesss2() {
    this.Usefull1 = true;
    this.Usefull2 = true;
    this.Usefull3 = false;
    this.Usefull4 = false;
    this.Usefull5 = false;
    this.totalusefullCount = 2;
  }
  usefullnesss3() {
    this.Usefull1 = true;
    this.Usefull2 = true;
    this.Usefull3 = true;
    this.Usefull4 = false;
    this.Usefull5 = false;
    this.totalusefullCount = 3;
  }
  usefullnesss4() {
    this.totalusefullCount = 4;
    this.Usefull1 = true;
    this.Usefull2 = true;
    this.Usefull3 = true;
    this.Usefull4 = true;
    this.Usefull5 = false;
  }
  usefullnesss5() {
    this.totalusefullCount = 5;
    this.Usefull1 = true;
    this.Usefull2 = true;
    this.Usefull3 = true;
    this.Usefull4 = true;
    this.Usefull5 = true;
  }


  //planning End
}
