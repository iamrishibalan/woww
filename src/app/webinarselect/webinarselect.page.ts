import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../shared/api-services/app.service';
import { Wheeldata, Service } from '../../app/apiservice/staicdata';
import { WheelContent, Services } from '../../app/apiservice/StaticContent'
import { LoginService } from '../login.service'
import { LoadingService } from '../apiservice/loading.services';
import { AdminPage } from '../admin/admin.page';
import { UserPage } from '../user/user.page';
import { HelpPage } from '../help/help.page';
import { MacrohelpPage } from '../macrohelp/macrohelp.page';


let base;
declare var $: any;

@Component({
  selector: 'app-webinarselect',
  templateUrl: './webinarselect.page.html',
  styleUrls: ['./webinarselect.page.scss'],
  providers: [AppService, Service, Services]
})
export class WebinarselectPage implements OnInit, AfterViewInit {

  userDetail: any = {};
  DataDetail: any = {};
  details: Array<any> = [];
  isDisabled: boolean = false;
  Expandbtn: boolean = true;
  collapsebtn: boolean = false;
  experience: boolean = false;
  expertise: boolean = false;
  timeManagement: boolean = false;
  availability: boolean = false;
  adaptability: boolean = false;
  Select = "Done"
  expValue: any;
  WebinarId: any;
  UserType: any;
  subject: string;
  TopicId: any;
  WContents: WheelContent[];
  Wheeldatas: Wheeldata[];
  selectValue: any;
  selectId: any;
  SelectedStaticdata: any;
  SelectedWheelContent: any;
  UserDetail: any;
  total: any = 0;
  AllTotalTime: any = 0;
  Webinartype: any;
  RExperience: boolean = false;
  RExpertise: boolean = false;
  RAvailability: boolean = false;
  RTimeManagement: boolean = false;
  RAdaptability: boolean = false;
  CollapseTrue: boolean = true;
  ExpandTrue: boolean = false;
  RecruitingSpeaker: boolean = false;
  Decidingonthetopic: boolean = false;
  AssigningRoles: boolean = false;
  DecidingonPlatform: boolean = false;
  PrepareEq: boolean = false;
  SetupRegister: boolean = false;
  WebinarDetail: any = {};
  SelectedCount;
  TotalCount: any = 8;
  CompletedPercent: any = 0;
  totalHourse: any = 0;
  BtnShow: boolean = false;
  overAllpercent: any = 0;
  Organizer: boolean = false;
  Presenter: boolean = false;
  Assistant: boolean = false;
  porganizer: boolean = false;
  ppresenter: boolean = false;
  passistant: boolean = false;
  Setgoalsobjectives: boolean = false;
  Determine: boolean = false;
  Maketopics: boolean = false;
  fixtopic: boolean = false;
  decidingTopic1: boolean = false;
  decidingTopic2: boolean = false;
  decidingTopic3: boolean = false;
  decidingTopic4: boolean = false;
  DecidingPlatMainGreen1: boolean = false;
  DecidingPlatMainGreen2: boolean = false;
  DecidingPlatMainGreen3: boolean = false;
  DecidingPlatMainGreen4: boolean = false;
  DecidingPlatMainGreen5: boolean = false;
  DecidingPlatMainGreen6: boolean = false;
  DecidingPlatMainGreen7: boolean = false;
  DecidingPlatMainGreen8: boolean = false;
  DecidingPlatFormClick1: boolean = false;
  DecidingPlatFormClick2: boolean = false;
  DecidingPlatFormClick3: boolean = false;
  DecidingPlatFormClick4: boolean = false;
  DecidingPlatFormClick5: boolean = false;
  DecidingPlatFormClick6: boolean = false;
  DecidingPlatFormClick7: boolean = false;
  DecidingPlatFormClick8: boolean = false;
  PrepareEqGreen1: boolean = false;
  PrepareEqGreen2: boolean = false;
  PrepareEqGreen3: boolean = false;
  PrepareEqGreen4: boolean = false;
  PrepareEqGreen5: boolean = false;
  PrepareEqGreen6: boolean = false;
  preparequipments1: boolean = false;
  preparequipments2: boolean = false;
  preparequipments3: boolean = false;
  preparequipments4: boolean = false;
  preparequipments5: boolean = false;
  preparequipments6: boolean = false;
  SetupRGreen1: boolean = false;
  SetupRGreen2: boolean = false;
  SetupRGreen3: boolean = false;
  SetupRGreen4: boolean = false;
  SetupRGreen5: boolean = false;
  setupR1: boolean = false;
  setupR2: boolean = false;
  setupR3: boolean = false;
  setupR4: boolean = false;
  setupR5: boolean = false;
  Marketting: boolean = false;
  MarketingGreen1: boolean = false;
  MarketingGreen2: boolean = false;
  MarketingGreen3: boolean = false;
  marketing1: boolean = false;
  marketing2: boolean = false;
  marketing3: boolean = false;
  Dryrun: boolean = false;
  DryRunGreen1: boolean = false;
  DryRunGreen2: boolean = false;
  DryRunGreen3: boolean = false;
  DryRunGreen4: boolean = false;
  DryRunGreen5: boolean = false;
  DryRunGreen6: boolean = false;
  dryRun1: boolean = false;
  dryRun2: boolean = false;
  dryRun3: boolean = false;
  dryRun4: boolean = false;
  dryRun5: boolean = false;
  dryRun6: boolean = false;
  Recordthewebinar: boolean = false
  RecordthewebGreen1: boolean = false;
  RecordthewebGreen2: boolean = false;
  RecordthewebGreen3: boolean = false;
  RecordthewebGreen4: boolean = false;
  recweb1: boolean = false;
  recweb2: boolean = false;
  recweb3: boolean = false;
  recweb4: boolean = false;
  checkontheconnection: boolean = false;
  Checkontheconnectiongreen1: boolean = false;
  Checkontheconnectiongreen2: boolean = false;
  Checkontheconnectiongreen3: boolean = false;
  Checkontheconnectiongreen4: boolean = false;
  CHECKconnect1: boolean = false;
  CHECKconnect2: boolean = false;
  CHECKconnect3: boolean = false;
  CHECKconnect4: boolean = false;
  Gatherspeakerandcallinguests: boolean = false;
  Gatherspeakergreen1: boolean = false;
  Gatherspeakergreen2: boolean = false;
  Gatherspeakergreen3: boolean = false;
  Gatherspeakergreen4: boolean = false;
  Gather1: boolean = false;
  Gather2: boolean = false;
  Gather3: boolean = false;
  Gather4: boolean = false;
  Evaluatethefeed: boolean = false;
  Evaluatethefeedgreen1: boolean = false;
  Evaluatethefeedgreen2: boolean = false;
  Evaluatethefeedgreen3: boolean = false;
  EvaFeedback1: boolean = false;
  EvaFeedback2: boolean = false;
  EvaFeedback3: boolean = false;
  Promoteonsocial: boolean = false;
  Promoteonsocialgreen1: boolean = false;
  Promoteonsocialgreen2: boolean = false;
  Promoteonsocialgreen3: boolean = false;
  Promote1: boolean = false;
  Promote2: boolean = false;
  Promote3: boolean = false;
  Planfornextweb: boolean = false;
  Planfornextgreen1: boolean = false;
  Planfornextgreen2: boolean = false;
  Planfornextgreen3: boolean = false;
  Plan1: boolean = false;
  Plan2: boolean = false;
  Plan3: boolean = false;
  Sendingfeed: boolean = false;
  sendingfeedGreen1: boolean = false;
  sendingfeedGreen2: boolean = false;
  sendingfeedGreen3: boolean = false;
  sendingfeedGreen4: boolean = false;
  Send1: boolean = false;
  Send2: boolean = false;
  Send3: boolean = false;
  Send4: boolean = false;
  Collectingthematerialsandsharing: boolean = false;
  CollectGreen1: boolean = false;
  CollectGreen2: boolean = false;
  CollectGreen3: boolean = false;
  CollectGreen4: boolean = false;
  Collect1: boolean = false;
  Collect2: boolean = false;
  Collect3: boolean = false;
  Collect4: boolean = false;
  startDates: any;


  Decided: boolean = false;
  Decided1: boolean = false;
  Decided2: boolean = false;
  Decided3: boolean = false;
  Decided4: boolean = false;

  AssigningCont: boolean = false;
  AssigningCont1: boolean = false;
  AssigningCont2: boolean = false;
  AssigningCont3: boolean = false;

  RecrtContent: boolean = false;
  RecrtContent1: boolean = false;
  RecrtContent2: boolean = false;
  RecrtContent3: boolean = false;
  RecrtContent4: boolean = false;
  RecrtContent5: boolean = false;

  DplatContnt: boolean = false;
  DplatContnt1: boolean = false;
  DplatContnt2: boolean = false;
  DplatContnt3: boolean = false;
  DplatContnt4: boolean = false;
  DplatContnt5: boolean = false;
  DplatContnt6: boolean = false;
  DplatContnt7: boolean = false;
  DplatContnt8: boolean = false;

  PreEquipCont: boolean = false;
  PreEquipCont1: boolean = false;
  PreEquipCont2: boolean = false;
  PreEquipCont3: boolean = false;
  PreEquipCont4: boolean = false;
  PreEquipCont5: boolean = false;
  PreEquipCont6: boolean = false;

  SetupCont: boolean = false;
  SetupCont1: boolean = false;
  SetupCont2: boolean = false;
  SetupCont3: boolean = false;
  SetupCont4: boolean = false;
  SetupCont5: boolean = false;

  Marketingcont: boolean = false;
  Marketingcont1: boolean = false;
  Marketingcont2: boolean = false;
  Marketingcont3: boolean = false;

  DryCont: boolean = false;
  DryCont1: boolean = false;
  DryCont2: boolean = false;
  DryCont3: boolean = false;
  DryCont4: boolean = false;
  DryCont5: boolean = false;
  DryCont6: boolean = false;

  CconectCont: boolean = false;
  CconectCont1: boolean = false;
  CconectCont2: boolean = false;
  CconectCont3: boolean = false;
  CconectCont4: boolean = false;

  RecWebCont: boolean = false;
  RecWebCont1: boolean = false;
  RecWebCont2: boolean = false;
  RecWebCont3: boolean = false;
  RecWebCont4: boolean = false;

  PrmoteSContnt: boolean = false;
  PrmoteSContnt1: boolean = false;
  PrmoteSContnt2: boolean = false;
  PrmoteSContnt3: boolean = false;

  GatherCont: boolean = false;
  GatherCont1: boolean = false;
  GatherCont2: boolean = false;
  GatherCont3: boolean = false;
  GatherCont4: boolean = false;

  SendFeedCont: boolean = false;
  SendFeedCont1: boolean = false;
  SendFeedCont2: boolean = false;
  SendFeedCont3: boolean = false;
  SendFeedCont4: boolean = false;

  ColMatCont: boolean = false;
  ColMatCont1: boolean = false;
  ColMatCont2: boolean = false;
  ColMatCont3: boolean = false;
  ColMatCont4: boolean = false;

  EvalCOnt: boolean = false;
  EvalCOnt1: boolean = false;
  EvalCOnt2: boolean = false;
  EvalCOnt3: boolean = false;

  PlanFNCont: boolean = false;
  PlanFNCont1: boolean = false;
  PlanFNCont2: boolean = false;
  PlanFNCont3: boolean = false;


  constructor(private route: Router, public loading: LoadingService, public modalController: ModalController, public activatedRoute: ActivatedRoute, public apiService: AppService, private service: Service, private services: Services, private globalTransfer: LoginService) {
    base = this;
    this.UserDetail = JSON.parse(localStorage.getItem('UserDetail'));
    this.startDates = new Date();

    // console.log("ELAPSED MIN: " + ((new Date() - this.startDates) / 1000 / 60) + " min")

  }
  ngAfterViewInit() {
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
        rot = document.getElementById('rotated');

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
      }, 2000);

    }).call(this);

  }


  ngOnInit() {

    this.WContents = this.services.getWheelContentss();
    this.DataDetail = this.WContents[0];


    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));
    //this.loading.present();
    this.apiService.getAll('getAllWebinar', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
      this.loading.dismiss();
      if ((response as any).isSuccess) {
        this.details = (response as any).data;
      }
    })
    sessionStorage.setItem('Ratting', '0');

    this.activatedRoute.queryParams.subscribe((res) => {
      this.TopicId = res.NodeId;
      this.TotalCount = res.NodeCount;
      this.WebinarId = res.WebinarId;
      this.Webinartype = res.Webinartype;
      this.Wheeldatas = JSON.parse(res.Wheeldatas);
      // this.WContents = JSON.parse(res.WContents)
      let ExitPage = {
        path: 'webinarselect',
        NodeId: this.TopicId,
        WebinarId: this.WebinarId,
        NodeCount: this.TotalCount,
        Wheeldatas: JSON.stringify(this.Wheeldatas),
        // WContents : JSON.stringify(this.WContents),
        Webinartype: this.Webinartype
      }
      localStorage.setItem('ExitApp', JSON.stringify(ExitPage));
      //this.loading.present();
      this.apiService.create('getSingleWebinarDetail', { WebinarId: res.WebinarId, Webinartype: res.Webinartype }).subscribe((response) => {
        this.loading.dismiss();
        if ((response as any).isSuccess) {
          this.WebinarDetail = (response as any).data[0];
        }
      })
      if (this.TopicId == 'Deciding on the topic') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = true;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        this.Sendingfeed = false;
        this.Collectingthematerialsandsharing = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Planning[0].Decidingonthetopic;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = true;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }

        this.SelectedCount = 0;
        let Minutes = parseFloat(this.Wheeldatas[0].Planning[1].DecidingonthetopicTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Planning[1].DecidingonthetopicTime) / 360;

        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Planning[1].DecidingonthetopicTime + ' ' + 'Sec';
        }
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;

          }
          if (this.SelectedStaticdata[i].Description == 'set goals and objectives' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Setgoalsobjectives = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Determine your target audience' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Determine = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Make the list of topics' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Maketopics = true;
          }
          if (this.SelectedStaticdata[i].Description == 'fix the topic' && this.SelectedStaticdata[i].Percentage != 0) {
            this.fixtopic = true;
          }
        }
      }
      if (this.TopicId == 'Assigning Roles') {
        this.AssigningRoles = true;
        this.Sendingfeed = false;
        this.Collectingthematerialsandsharing = false;
        this.RecruitingSpeaker = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Planning[0].AssigningRoles;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = true;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Planning[1].AssigningRolesTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Planning[1].AssigningRolesTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Planning[1].AssigningRolesTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;

          }
          if (this.SelectedStaticdata[i].Description == 'Organizer' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Organizer = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Presenter' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Presenter = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Assistant' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Assistant = true;
          }
        }
      }
      if (this.TopicId == 'Recruiting the speakers') {
        this.RecruitingSpeaker = true;
        this.Sendingfeed = false;
        this.Collectingthematerialsandsharing = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Planning[0].Recruitingthespeakers;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = true;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Planning[1].RecruitingthespeakersTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Planning[1].RecruitingthespeakersTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Planning[1].RecruitingthespeakersTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;

          }
          if (this.SelectedStaticdata[i].Description == 'Experience' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RExperience = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Expertise' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RExpertise = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Availability' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RAvailability = true;

          }
          if (this.SelectedStaticdata[i].Description == 'Time Management' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RTimeManagement = true;

          }
          if (this.SelectedStaticdata[i].Description == 'Adaptability' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RAdaptability = true;
          }
        }
      }
      if (this.TopicId == 'Deciding on the platform') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Sendingfeed = false;
        this.Collectingthematerialsandsharing = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = true;
        this.PrepareEq = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Planning[0].Decidingontheplatform;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = true;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Planning[1].DecidingontheplatformTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Planning[1].DecidingontheplatformTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Planning[1].DecidingontheplatformTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Ease of use' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Audience size' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Budget' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Recording option' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen4 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Engagement tool' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen5 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Mobile utilization' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen6 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Multi-stream capabilities' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen7 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Video & Audio quality' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DecidingPlatMainGreen8 = true;
          }
        }
      }
      if (this.TopicId == 'Prepare the equipments') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Sendingfeed = false;
        this.Collectingthematerialsandsharing = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = true;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Preparing[0].Preparetheequipments;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = true;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Preparing[1].PreparetheequipmentsTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Preparing[1].PreparetheequipmentsTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Preparing[1].PreparetheequipmentsTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Computer/tablets' && this.SelectedStaticdata[i].Percentage != 0) {
            this.PrepareEqGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Stable Internet Connection' && this.SelectedStaticdata[i].Percentage != 0) {
            this.PrepareEqGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Microphone' && this.SelectedStaticdata[i].Percentage != 0) {
            this.PrepareEqGreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Webcam' && this.SelectedStaticdata[i].Percentage != 0) {
            this.PrepareEqGreen4 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Lighting' && this.SelectedStaticdata[i].Percentage != 0) {
            this.PrepareEqGreen5 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Earpiece' && this.SelectedStaticdata[i].Percentage != 0) {
            this.PrepareEqGreen6 = true;
          }
        }
      }
      if (this.TopicId == 'Set-up Registration') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Sendingfeed = false;
        this.Collectingthematerialsandsharing = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.SetupRegister = true;
        this.Marketting = false;
        this.Dryrun = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Preparing[0].SetupRegistration;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = true;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Preparing[1].SetupRegistrationTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Preparing[1].SetupRegistrationTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Preparing[1].SetupRegistrationTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Registration tool' && this.SelectedStaticdata[i].Percentage != 0) {
            this.SetupRGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Registration fee' && this.SelectedStaticdata[i].Percentage != 0) {
            this.SetupRGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Clear Concise forms' && this.SelectedStaticdata[i].Percentage != 0) {
            this.SetupRGreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Contact details of host' && this.SelectedStaticdata[i].Percentage != 0) {
            this.SetupRGreen4 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Follow-up' && this.SelectedStaticdata[i].Percentage != 0) {
            this.SetupRGreen5 = true;
          }
        }
      }
      if (this.TopicId == 'Marketing') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.Collectingthematerialsandsharing = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.Sendingfeed = false;
        this.SetupRegister = false;
        this.Marketting = true;
        this.Dryrun = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Preparing[0].Marketing;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = true;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Preparing[1].MarketingTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Preparing[1].MarketingTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Preparing[1].MarketingTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Promotional Material' && this.SelectedStaticdata[i].Percentage != 0) {
            this.MarketingGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Promoting' && this.SelectedStaticdata[i].Percentage != 0) {
            this.MarketingGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Follow-up' && this.SelectedStaticdata[i].Percentage != 0) {
            this.MarketingGreen3 = true;
          }
        }
      }
      if (this.TopicId == 'Dry Run') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.Sendingfeed = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = true;
        this.Collectingthematerialsandsharing = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Preparing[0].DryRun;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = true;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Preparing[1].DryRunTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Preparing[1].DryRunTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Preparing[1].DryRunTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Introductions' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DryRunGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Test The equipment’s' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DryRunGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Agenda review' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DryRunGreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Presentation check' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DryRunGreen4 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Timing' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DryRunGreen5 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Reviewing the recording' && this.SelectedStaticdata[i].Percentage != 0) {
            this.DryRunGreen6 = true;
          }
        }
      }
      if (this.TopicId == 'Record the webinar') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.Sendingfeed = false;
        this.SetupRegister = false;
        this.Planfornextweb = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Collectingthematerialsandsharing = false;
        this.Recordthewebinar = true;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Performing[0].Recordthewebinar;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = true;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Performing[1].RecordthewebinarTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Performing[1].RecordthewebinarTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Performing[1].RecordthewebinarTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Use a build in screen recorder download' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RecordthewebGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Set up screen recording' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RecordthewebGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Record the webinar' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RecordthewebGreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Edit and save' && this.SelectedStaticdata[i].Percentage != 0) {
            this.RecordthewebGreen4 = true;
          }
        }
      }
      if (this.TopicId == 'Check on the connections') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.Sendingfeed = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Collectingthematerialsandsharing = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = true;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        this.Planfornextweb = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Performing[0].Checkontheconnections;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = true;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Performing[1].CheckontheconnectionsTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Performing[1].CheckontheconnectionsTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Performing[1].CheckontheconnectionsTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Check the internet speed' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Checkontheconnectiongreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Check on the equipments' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Checkontheconnectiongreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Log into platform 15-30 mins prior' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Checkontheconnectiongreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Perform a audio and video check' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Checkontheconnectiongreen4 = true;
          }
        }
      }
      if (this.TopicId == 'Gather speaker and call-in guests') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Sendingfeed = false;
        this.Dryrun = false;
        this.Collectingthematerialsandsharing = false;
        this.Planfornextweb = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = true;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Performing[0].Gatherspeakerandcallinguests;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = true;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Performing[1].GatherspeakerandcallinguestsTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Performing[1].GatherspeakerandcallinguestsTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Performing[1].GatherspeakerandcallinguestsTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Start the program at right time' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Gatherspeakergreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Welcome the speakers' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Gatherspeakergreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Stick to time' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Gatherspeakergreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'End the program with a formal vote of thanks' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Gatherspeakergreen4 = true;
          }
        }
      }
      if (this.TopicId == 'Evaluate the feedback') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Sendingfeed = false;
        this.Collectingthematerialsandsharing = false;
        this.Dryrun = false;
        this.Planfornextweb = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = true;
        this.Promoteonsocial = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Reviewing[0].Evaluatethefeedback;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = true;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Reviewing[1].EvaluatethefeedbackTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Reviewing[1].EvaluatethefeedbackTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Reviewing[1].EvaluatethefeedbackTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Review each of the feedback points' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Evaluatethefeedgreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Discuss on the feedback with the team' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Evaluatethefeedgreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Act on the feedback' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Evaluatethefeedgreen3 = true;
          }
        }
      }
      if (this.TopicId == 'Promote on social media') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Sendingfeed = false;
        this.Dryrun = false;
        this.Collectingthematerialsandsharing = false;
        this.Planfornextweb = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = true;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Performing[0].Promoteonsocialmedia;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = true;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Performing[1].PromoteonsocialmediaTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Performing[1].PromoteonsocialmediaTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Performing[1].PromoteonsocialmediaTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Testing the equipments & connectivity' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Promoteonsocialgreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Live streaming on social media(youtube/facebook/linkedin)' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Promoteonsocialgreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Gain reach and better targeting' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Promoteonsocialgreen3 = true;
          }
        }
      }
      if (this.TopicId == 'Plan for next webinar') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.Sendingfeed = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Collectingthematerialsandsharing = false;
        this.Planfornextweb = true;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Reviewing[0].Planfornextwebinar;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = true;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Reviewing[1].PlanfornextwebinarTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Reviewing[1].PlanfornextwebinarTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Reviewing[1].PlanfornextwebinarTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Review the strength and weakness' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Planfornextgreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Give adequate space between the two webinars' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Planfornextgreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Start discussing with the team members' && this.SelectedStaticdata[i].Percentage != 0) {
            this.Planfornextgreen3 = true;
          }
        }
      }
      if (this.TopicId == 'Sending feedback') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.Sendingfeed = true;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Collectingthematerialsandsharing = false;
        this.Planfornextweb = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Reviewing[0].Sendingfeedback;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = true;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = false;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        this.totalHourse = this.Wheeldatas[0].Reviewing[1].SendingfeedbackTime;
        let Minutes = parseFloat(this.Wheeldatas[0].Reviewing[1].SendingfeedbackTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Reviewing[1].SendingfeedbackTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Reviewing[1].SendingfeedbackTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Keep scale questions and multiple choice questions' && this.SelectedStaticdata[i].Percentage != 0) {
            this.sendingfeedGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Keep the language simple and direct' && this.SelectedStaticdata[i].Percentage != 0) {
            this.sendingfeedGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Link the certificate of participation with feedback' && this.SelectedStaticdata[i].Percentage != 0) {
            this.sendingfeedGreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'send the feedback link within 2 hours of webinar ends' && this.SelectedStaticdata[i].Percentage != 0) {
            this.sendingfeedGreen4 = true;
          }
        }
      }
      if (this.TopicId == 'Collecting the materials and sharing') {
        this.RecruitingSpeaker = false;
        this.AssigningRoles = false;
        this.Decidingonthetopic = false;
        this.DecidingonPlatform = false;
        this.PrepareEq = false;
        this.Sendingfeed = false;
        this.SetupRegister = false;
        this.Marketting = false;
        this.Dryrun = false;
        this.Collectingthematerialsandsharing = true;
        this.Planfornextweb = false;
        this.Recordthewebinar = false;
        this.checkontheconnection = false;
        this.Gatherspeakerandcallinguests = false;
        this.Evaluatethefeed = false;
        this.Promoteonsocial = false;
        let PValue: any = 0;
        this.SelectedStaticdata = this.Wheeldatas[0].Reviewing[0].Collectingthematerialsandsharing;
        let decideData = this.DataDetail.Planning[0];
        if (decideData != 0) {
          this.Decided = false;
          this.Decided1 = false;
          this.Decided2 = false;
          this.Decided3 = false;
          this.Decided4 = false;

          this.AssigningCont = false;
          this.AssigningCont1 = false;
          this.AssigningCont2 = false;
          this.AssigningCont3 = false;

          this.RecrtContent = false;
          this.RecrtContent1 = false;
          this.RecrtContent2 = false;
          this.RecrtContent3 = false;
          this.RecrtContent4 = false;
          this.RecrtContent5 = false;

          this.DplatContnt = false;
          this.DplatContnt1 = false;
          this.DplatContnt2 = false;
          this.DplatContnt3 = false;
          this.DplatContnt4 = false;
          this.DplatContnt5 = false;
          this.DplatContnt6 = false;
          this.DplatContnt7 = false;
          this.DplatContnt8 = false;

          this.PreEquipCont = false;
          this.PreEquipCont1 = false;
          this.PreEquipCont2 = false;
          this.PreEquipCont3 = false;
          this.PreEquipCont4 = false;
          this.PreEquipCont5 = false;
          this.PreEquipCont6 = false;

          this.SetupCont = false;
          this.SetupCont1 = false;
          this.SetupCont2 = false;
          this.SetupCont3 = false;
          this.SetupCont4 = false;
          this.SetupCont5 = false;

          this.Marketingcont = false;
          this.Marketingcont1 = false;
          this.Marketingcont2 = false;
          this.Marketingcont3 = false;

          this.DryCont = false;
          this.DryCont1 = false;
          this.DryCont2 = false;
          this.DryCont3 = false;
          this.DryCont4 = false;
          this.DryCont5 = false;
          this.DryCont6 = false;

          this.CconectCont = false;
          this.CconectCont1 = false;
          this.CconectCont2 = false;
          this.CconectCont3 = false;
          this.CconectCont4 = false;

          this.RecWebCont = false;
          this.RecWebCont1 = false;
          this.RecWebCont2 = false;
          this.RecWebCont3 = false;
          this.RecWebCont4 = false;

          this.PrmoteSContnt = false;
          this.PrmoteSContnt1 = false;
          this.PrmoteSContnt2 = false;
          this.PrmoteSContnt3 = false;

          this.GatherCont = false;
          this.GatherCont1 = false;
          this.GatherCont2 = false;
          this.GatherCont3 = false;
          this.GatherCont4 = false;

          this.SendFeedCont = false;
          this.SendFeedCont1 = false;
          this.SendFeedCont2 = false;
          this.SendFeedCont3 = false;
          this.SendFeedCont4 = false;

          this.ColMatCont = true;
          this.ColMatCont1 = false;
          this.ColMatCont2 = false;
          this.ColMatCont3 = false;
          this.ColMatCont4 = false;

          this.EvalCOnt = false;
          this.EvalCOnt1 = false;
          this.EvalCOnt2 = false;
          this.EvalCOnt3 = false;

          this.PlanFNCont = false;
          this.PlanFNCont1 = false;
          this.PlanFNCont2 = false;
          this.PlanFNCont3 = false;
        }
        let Minutes = parseFloat(this.Wheeldatas[0].Reviewing[1].CollectingthematerialsandsharingTime) / 60;
        let Hourse = parseFloat(this.Wheeldatas[0].Reviewing[1].CollectingthematerialsandsharingTime) / 360;
        if (Hourse >= 1) {
          this.totalHourse = Hourse + ' ' + 'Hrs';
        }
        else if (Minutes >= 1) {
          this.totalHourse = Math.round(Minutes) + ' ' + 'Minutes';
        }
        else {
          this.totalHourse = this.Wheeldatas[0].Reviewing[1].CollectingthematerialsandsharingTime + ' ' + 'Sec';
        }
        this.SelectedCount = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          if (this.SelectedStaticdata[i].Action == true) {
            let lenCount = parseInt(this.SelectedStaticdata.length);
            let CompletedPercents = 100 / lenCount;
            this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
            PValue = PValue + CompletedPercents;
            this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
            this.SelectedCount = this.SelectedCount + 1;
          }
          if (this.SelectedStaticdata[i].Description == 'Request and collect the webinar materials from speakers' && this.SelectedStaticdata[i].Percentage != 0) {
            this.CollectGreen1 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Send the certificate of appreciation to resource persons' && this.SelectedStaticdata[i].Percentage != 0) {
            this.CollectGreen2 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Share the materials to participant through mail' && this.SelectedStaticdata[i].Percentage != 0) {
            this.CollectGreen3 = true;
          }
          if (this.SelectedStaticdata[i].Description == 'Share the materials within 3 days of completing webinar' && this.SelectedStaticdata[i].Percentage != 0) {
            this.CollectGreen4 = true;
          }
        }
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

  // rotetes(e) {
  //   document.querySelectorAll(".rotate").forEach(this.rotate);
  // }
  // rotate = (EL) => {
  //   let ang = 0; // All angles are expressed in radians
  //   let angStart = 0;
  //   let isStart = false;
  //   const angXY = (ev) => {
  //     const bcr = EL.getBoundingClientRect();
  //     const radius = bcr.width / 2;
  //     const { clientX, clientY } = ev.touches ? ev.touches[0] : ev;
  //     const y = clientY - bcr.top - radius;  // y from center
  //     const x = clientX - bcr.left - radius; // x from center
  //     return Math.atan2(y,x);
  //   };
  //   const pointerdown = (ev) => {
  //     isStart = true;
  //     angStart = angXY(ev) - ang;
  //   };
  //   const pointermove = (ev) => {
  //     if (!isStart) return;
  //     ev.preventDefault();
  //     ang = angXY(ev) - angStart;
  //     EL.style.transform = `rotateZ(${ang}rad)`;
  //   };
  //   const pointerup = () => {
  //     isStart = true;
  //   };
  //   EL.addEventListener("pointerdown", pointerdown);
  //   EL.addEventListener("pointermove", pointermove);
  //   EL.addEventListener("pointerup", pointerup);
  //   document.addEventListener("pointermove", pointermove);
  //   document.addEventListener("pointerdown", pointerdown);
  //   document.addEventListener("pointerup", pointerup);
  // };
  Expand() {
    this.collapsebtn = false;
    this.Expandbtn = true;
    this.ExpandTrue = false;
    this.CollapseTrue = true;
    // $(document).ready(() => {
    //   $("#fadeIn").animate({
    //     top: '50px',
    //   });
    // });
    // $(document).ready(() => {
    //   $("#fadeIn").addClass('rot').removeClass('rot1')
    // });
  }
  collapse() {
    this.Expandbtn = false;
    this.collapsebtn = true;
    this.ExpandTrue = true;
    this.CollapseTrue = false;
    // $(document).ready(() => {
    //   $("#fadeIn").animate({
    //     top: '5px',
    //   });
    // });
    // $(document).ready(() => {
    //   $("#fadeIn").addClass('rot1').removeClass('rot')
    // });
  }
  GoMacroWhell() {
    // let val = sessionStorage.getItem('Ratting');
    // if (this.WebinarDetail.Webinar_TotalRate != "5.0") {
    //   if (val == '1') {

    //     this.route.navigate(['/feedback'], { queryParams: { WebinarId: this.WebinarId, Webinartype: this.Webinartype } });
    //   }
    //   else {
    //     this.route.navigate(['/collapse'], { queryParams: { WebinarId: this.WebinarId, Webinartype: this.Webinartype } });
    //   }
    // }
    // else {
    //   this.route.navigate(['/collapse'], { queryParams: { WebinarId: this.WebinarId, Webinartype: this.Webinartype } });

    // }
    this.route.navigate(['/collapse'], { queryParams: { WebinarId: this.WebinarId, Webinartype: this.Webinartype } });
 
  }
  btnClick() {
    sessionStorage.setItem('Ratting', '1');
    let PValue: any = 0;
    //Undo
    if (this.Select == 'Undo') {
      this.SelectedCount = 0;
      for (let i = 0; i < this.SelectedStaticdata.length; i++) {
        if (this.SelectedStaticdata[i].Description == this.selectId) {
          let len = parseInt(this.SelectedStaticdata.length);
          this.SelectedStaticdata[i].Action = false;
          this.SelectedStaticdata[i].Percentage = 0;
        }
        if (this.SelectedStaticdata[i].Action == true) {
          let lenCount = parseInt(this.SelectedStaticdata.length);
          let CompletedPercents: any = 100 / lenCount;
          this.CompletedPercent = (Math.round((parseFloat(PValue) + parseFloat(CompletedPercents)) * 100) / 100).toFixed(2);
          PValue = parseFloat(PValue) + parseFloat(CompletedPercents);
          this.overAllpercent = (Math.round((100 - parseFloat(PValue)) * 100) / 100).toFixed(2);
          this.SelectedCount = this.SelectedCount + 1;
        }
      }
      //planning start
      if (this.TopicId == 'Deciding on the topic') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Planning[1].Decidingonthetopic = parseFloat(this.total);
        this.Wheeldatas[0].Planning[0].Decidingonthetopic = this.SelectedStaticdata;
        if (this.selectId == 'set goals and objectives') {
          this.Setgoalsobjectives = false;
        }
        if (this.selectId == 'Determine your target audience') {
          this.Determine = false;
        }
        if (this.selectId == 'Make the list of topics') {
          this.Maketopics = false;
        }
        if (this.selectId == 'fix the topic') {
          this.fixtopic = false;
        }
      }
      if (this.TopicId == 'Assigning Roles') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }

        this.Wheeldatas[0].Planning[1].AssigningRoles = parseFloat(this.total);
        this.Wheeldatas[0].Planning[0].AssigningRoles = this.SelectedStaticdata;
        if (this.selectId == 'Presenter') {
          this.Presenter = false;
        }
        if (this.selectId == 'Assistant') {
          this.Assistant = false;
        }
        if (this.selectId == 'Organizer') {
          this.Organizer = false;
        }
      }

      if (this.TopicId == 'Recruiting the speakers') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Planning[1].Recruitingthespeakers = parseFloat(this.total);
        this.Wheeldatas[0].Planning[0].Recruitingthespeakers = this.SelectedStaticdata;
        if (this.selectId == 'Experience') {
          this.RExperience = false;
        }
        if (this.selectId == 'Expertise') {
          this.RExpertise = false;
        }
        if (this.selectId == 'Availability') {
          this.RAvailability = false;
        }
        if (this.selectId == 'Time Management') {
          this.RTimeManagement = false;
        }
        if (this.selectId == 'Adaptability') {
          this.RAdaptability = false;
        }
      }
      if (this.TopicId == 'Deciding on the platform') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Planning[1].Decidingontheplatform = parseFloat(this.total);
        this.Wheeldatas[0].Planning[0].Decidingontheplatform = this.SelectedStaticdata;
        if (this.selectId == 'Ease of use') {
          this.DecidingPlatMainGreen1 = false;
        }
        if (this.selectId == 'Audience size') {
          this.DecidingPlatMainGreen2 = false;
        }
        if (this.selectId == 'Budget') {
          this.DecidingPlatMainGreen3 = false;
        }
        if (this.selectId == 'Recording option') {
          this.DecidingPlatMainGreen4 = false;
        }
        if (this.selectId == 'Engagement tool') {
          this.DecidingPlatMainGreen5 = false;
        }
        if (this.selectId == 'Mobile utilization') {
          this.DecidingPlatMainGreen6 = false;
        }
        if (this.selectId == 'Multi-stream capabilities') {
          this.DecidingPlatMainGreen7 = false;
        }
        if (this.selectId == 'Video & Audio quality') {
          this.DecidingPlatMainGreen8 = false;
        }
      }
      // planning end
      //preparing start
      //Prepare the equipments start
      if (this.TopicId == 'Prepare the equipments') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Preparing[1].Preparetheequipments = this.total;
        this.Wheeldatas[0].Preparing[0].Preparetheequipments = this.SelectedStaticdata;
        if (this.selectId == 'Computer/tablets') {
          this.PrepareEqGreen1 = false;
        }
        if (this.selectId == 'Stable Internet Connection') {
          this.PrepareEqGreen2 = false;
        }
        if (this.selectId == 'Microphone') {
          this.PrepareEqGreen3 = false;
        }
        if (this.selectId == 'Webcam') {
          this.PrepareEqGreen4 = false;
        }
        if (this.selectId == 'Lighting') {
          this.PrepareEqGreen5 = false;
        }
        if (this.selectId == 'Earpiece') {
          this.PrepareEqGreen6 = false;
        }
      }
      //Prepare the equipments end
      //SetupRegistration start
      if (this.TopicId == 'Set-up Registration') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Preparing[1].SetupRegistration = this.total;
        this.Wheeldatas[0].Preparing[0].SetupRegistration = this.SelectedStaticdata;
        if (this.selectId == 'Registration tool') {
          this.SetupRGreen1 = false;
        }
        if (this.selectId == 'Registration fee') {
          this.SetupRGreen2 = false;
        }
        if (this.selectId == 'Clear Concise forms') {
          this.SetupRGreen3 = false;
        }
        if (this.selectId == 'Contact details of host') {
          this.SetupRGreen4 = false;
        }
        if (this.selectId == 'Follow-up') {
          this.SetupRGreen5 = false;
        }
      }
      //SetupRegistration end
      //marketing start
      if (this.TopicId == 'Marketing') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Preparing[1].Marketing = this.total;
        this.Wheeldatas[0].Preparing[0].Marketing = this.SelectedStaticdata;
        if (this.selectId == 'Promotional Material') {
          this.MarketingGreen1 = false;
        }
        if (this.selectId == 'Promoting') {
          this.MarketingGreen2 = false;
        }
        if (this.selectId == 'Follow-up') {
          this.MarketingGreen3 = false;
        }
      }
      //marketing end
      //dryrun start
      if (this.TopicId == 'Dry Run') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Preparing[1].DryRun = this.total;
        this.Wheeldatas[0].Preparing[0].DryRun = this.SelectedStaticdata;
        if (this.selectId == 'Introductions') {
          this.DryRunGreen1 = false;
        }
        if (this.selectId == 'Test The equipment’s') {
          this.DryRunGreen2 = false;
        }
        if (this.selectId == 'Agenda review') {
          this.DryRunGreen3 = false;
        }
        if (this.selectId == 'Presentation check') {
          this.DryRunGreen4 = false;
        }
        if (this.selectId == 'Timing') {
          this.DryRunGreen5 = false;
        }
        if (this.selectId == 'Reviewing the recording') {
          this.DryRunGreen6 = false;
        }
      }
      //dryrun end
      //preparing end
      //performing start
      //check on the connection
      if (this.TopicId == 'Check on the connections') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Performing[1].Checkontheconnections = this.total;
        this.Wheeldatas[0].Performing[0].Checkontheconnections = this.SelectedStaticdata;
        if (this.selectId == 'Check the internet speed') {
          this.Checkontheconnectiongreen1 = false;
        }
        if (this.selectId == 'Check on the equipments') {
          this.Checkontheconnectiongreen2 = false;
        }
        if (this.selectId == 'Log into platform 15-30 mins prior') {
          this.Checkontheconnectiongreen3 = false;
        }
        if (this.selectId == 'Perform a audio and video check') {
          this.Checkontheconnectiongreen4 = false;
        }
      }
      //check on the connection end
      //record webinar start
      if (this.TopicId == 'Record the webinar') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Performing[1].Recordthewebinar = this.total;
        this.Wheeldatas[0].Performing[0].Recordthewebinar = this.SelectedStaticdata;
        if (this.selectId == 'Use a build in screen recorder download') {
          this.RecordthewebGreen1 = false;
        }
        if (this.selectId == 'Set up screen recording') {
          this.RecordthewebGreen2 = false;
        }
        if (this.selectId == 'Record the webinar') {
          this.RecordthewebGreen3 = false;
        }
        if (this.selectId == 'Edit and save') {
          this.RecordthewebGreen4 = false;
        }
      }
      //record webinar end
      //gather speaker ih call start
      if (this.TopicId == 'Gather speaker and call-in guests') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests = this.total;
        this.Wheeldatas[0].Performing[0].Gatherspeakerandcallinguests = this.SelectedStaticdata;
        if (this.selectId == 'Start the program at right time') {
          this.Gatherspeakergreen1 = false;
        }
        if (this.selectId == 'Welcome the speakers') {
          this.Gatherspeakergreen2 = false;
        }
        if (this.selectId == 'Stick to time') {
          this.Gatherspeakergreen3 = false;
        }
        if (this.selectId == 'End the program with a formal vote of thanks') {
          this.Gatherspeakergreen4 = false;
        }
      }
      //gather speaker in call end
      //promote on social media
      if (this.TopicId == 'Promote on social media') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Performing[1].Promoteonsocialmedia = this.total;
        this.Wheeldatas[0].Performing[0].Promoteonsocialmedia = this.SelectedStaticdata;
        if (this.selectId == 'Testing the equipments & connectivity') {
          this.Promoteonsocialgreen1 = false;
        }
        if (this.selectId == 'Live streaming on social media(youtube/facebook/linkedin)') {
          this.Promoteonsocialgreen2 = false;
        }
        if (this.selectId == 'Gain reach and better targeting') {
          this.Promoteonsocialgreen3 = false;
        }
      }
      ///promote on social media end
      //performing end

      //reviewing start
      //evaluate feedback start 
      if (this.TopicId == 'Evaluate the feedback') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback = this.total;
        this.Wheeldatas[0].Reviewing[0].Evaluatethefeedback = this.SelectedStaticdata;
        if (this.selectId == 'Review each of the feedback points') {
          this.Evaluatethefeedgreen1 = false;
        }
        if (this.selectId == 'Discuss on the feedback with the team') {
          this.Evaluatethefeedgreen2 = false;
        }
        if (this.selectId == 'Act on the feedback') {
          this.Evaluatethefeedgreen3 = false;
        }
      }
      //evaluate feedback end 
      //plan for next webinar
      if (this.TopicId == 'Plan for next webinar') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Reviewing[1].Planfornextwebinar = this.total;
        this.Wheeldatas[0].Reviewing[0].Planfornextwebinar = this.SelectedStaticdata;
        if (this.selectId == 'Review the strength and weakness') {
          this.Planfornextgreen1 = false;
        }
        if (this.selectId == 'Give adequate space between the two webinars') {
          this.Planfornextgreen2 = false;
        }
        if (this.selectId == 'Start discussing with the team members') {
          this.Planfornextgreen3 = false;
        }
      }
      //plan for next webinar end
      //sending feedback
      if (this.TopicId == 'Sending feedback') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Reviewing[1].Sendingfeedback = this.total;
        this.Wheeldatas[0].Reviewing[0].Sendingfeedback = this.SelectedStaticdata;
        if (this.selectId == 'Keep scale questions and multiple choice questions') {
          this.sendingfeedGreen1 = false;
        }
        if (this.selectId == 'Keep the language simple and direct') {
          this.sendingfeedGreen2 = false;
        }
        if (this.selectId == 'Link the certificate of participation with feedback') {
          this.sendingfeedGreen3 = false;
        }
        if (this.selectId == 'send the feedback link within 2 hours of webinar ends') {
          this.sendingfeedGreen4 = false;
        }
      }
      //sending feedback end
      //•	Collecting the materials and sharing
      if (this.TopicId == 'Collecting the materials and sharing') {
        this.total = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing = this.total;
        this.Wheeldatas[0].Reviewing[0].Collectingthematerialsandsharing = this.SelectedStaticdata;
        if (this.selectId == 'Request and collect the webinar materials from speakers') {
          this.CollectGreen1 = false;
        }
        if (this.selectId == 'Send the certificate of appreciation to resource persons') {
          this.CollectGreen2 = false;
        }
        if (this.selectId == 'Share the materials to participant through mail') {
          this.CollectGreen3 = false;
        }
        if (this.selectId == 'Share the materials within 3 days of completing webinar') {
          this.CollectGreen4 = false;
        }
      }
      //•	Collecting the materials and sharing end
      //reviewing end
      this.apiService.create('WebinarStatus', { wheelData: JSON.stringify(this.Wheeldatas), WebinarId: this.WebinarId, UserId: this.UserDetail.reg_Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          this.Select = "Done";
        }
      })
    }
    //select
    else {
      this.SelectedCount = 0;
      for (let i = 0; i < this.SelectedStaticdata.length; i++) {
        if (this.SelectedStaticdata[i].Description == this.selectId) {
          let len = parseInt(this.SelectedStaticdata.length);
          let EndDate: any = new Date();
          let percentage = 100 / len;
          this.SelectedStaticdata[i].Action = true;
          this.SelectedStaticdata[i].Percentage = (Math.round((percentage) * 100) / 100).toFixed(2);
          this.SelectedStaticdata[i].TotalTime = ((EndDate - this.startDates) / 1000);
        }

        if (this.SelectedStaticdata[i].Action == true) {
          let lenCount = parseInt(this.SelectedStaticdata.length);
          let CompletedPercents = 100 / lenCount;
          this.CompletedPercent = (Math.round((PValue + CompletedPercents) * 100) / 100).toFixed(2);
          PValue = PValue + CompletedPercents;
          this.overAllpercent = (Math.round((100 - PValue) * 100) / 100).toFixed(2);
          this.SelectedCount = this.SelectedCount + 1;
        }
      }
      //planning start
      if (this.TopicId == 'Deciding on the topic') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Planning[1].Decidingonthetopic = this.total;
        this.Wheeldatas[0].Planning[1].DecidingonthetopicTime = this.AllTotalTime;
        this.Wheeldatas[0].Planning[0].Decidingonthetopic = this.SelectedStaticdata;
        if (this.selectId == 'set goals and objectives') {
          this.Setgoalsobjectives = true;
        }
        if (this.selectId == 'Determine your target audience') {
          this.Determine = true;
        }
        if (this.selectId == 'Make the list of topics') {
          this.Maketopics = true;
        }
        if (this.selectId == 'fix the topic') {
          this.fixtopic = true;
        }
      }
      if (this.TopicId == 'Assigning Roles') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Planning[1].AssigningRoles = this.total;
        this.Wheeldatas[0].Planning[1].AssigningRolesTime = this.AllTotalTime;
        this.Wheeldatas[0].Planning[0].AssigningRoles = this.SelectedStaticdata;
        if (this.selectId == 'Presenter') {
          this.Presenter = true;
        }
        if (this.selectId == 'Assistant') {
          this.Assistant = true;
        }
        if (this.selectId == 'Organizer') {
          this.Organizer = true;
        }
      }
      if (this.TopicId == 'Recruiting the speakers') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Planning[1].Recruitingthespeakers = this.total;
        this.Wheeldatas[0].Planning[1].RecruitingthespeakersTime = this.AllTotalTime;
        this.Wheeldatas[0].Planning[0].Recruitingthespeakers = this.SelectedStaticdata;
        if (this.selectId == 'Experience') {
          this.RExperience = true;
        }
        if (this.selectId == 'Expertise') {
          this.RExpertise = true;
        }
        if (this.selectId == 'Availability') {
          this.RAvailability = true;
        }
        if (this.selectId == 'Time Management') {
          this.RTimeManagement = true;
        }
        if (this.selectId == 'Adaptability') {
          this.RAdaptability = true;
        }
      }
      if (this.TopicId == 'Deciding on the platform') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Planning[1].Decidingontheplatform = this.total;
        this.Wheeldatas[0].Planning[1].DecidingontheplatformTime = this.AllTotalTime;
        this.Wheeldatas[0].Planning[0].Decidingontheplatform = this.SelectedStaticdata;
        if (this.selectId == 'Ease of use') {
          this.DecidingPlatMainGreen1 = true;
        }
        if (this.selectId == 'Audience size') {
          this.DecidingPlatMainGreen2 = true;
        }
        if (this.selectId == 'Budget') {
          this.DecidingPlatMainGreen3 = true;
        }
        if (this.selectId == 'Recording option') {
          this.DecidingPlatMainGreen4 = true;
        }
        if (this.selectId == 'Engagement tool') {
          this.DecidingPlatMainGreen5 = true;
        }
        if (this.selectId == 'Mobile utilization') {
          this.DecidingPlatMainGreen6 = true;
        }
        if (this.selectId == 'Multi-stream capabilities') {
          this.DecidingPlatMainGreen7 = true;
        }
        if (this.selectId == 'Video & Audio quality') {
          this.DecidingPlatMainGreen8 = true;
        }
      }
      //planning end
      //preparing start
      //Prepare the equipments start
      if (this.TopicId == 'Prepare the equipments') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Preparing[1].Preparetheequipments = this.total;
        this.Wheeldatas[0].Preparing[1].PreparetheequipmentsTime = this.total;
        this.Wheeldatas[0].Preparing[0].Preparetheequipments = this.SelectedStaticdata;
        if (this.selectId == 'Computer/tablets') {
          this.PrepareEqGreen1 = true;
        }
        if (this.selectId == 'Stable Internet Connection') {
          this.PrepareEqGreen2 = true;
        }
        if (this.selectId == 'Microphone') {
          this.PrepareEqGreen3 = true;
        }
        if (this.selectId == 'Webcam') {
          this.PrepareEqGreen4 = true;
        }
        if (this.selectId == 'Lighting') {
          this.PrepareEqGreen5 = true;
        }
        if (this.selectId == 'Earpiece') {
          this.PrepareEqGreen6 = true;
        }
      }
      //Prepare the equipments end
      //SetupRegistration start
      if (this.TopicId == 'Set-up Registration') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);

        }
        this.Wheeldatas[0].Preparing[1].SetupRegistration = this.total;
        this.Wheeldatas[0].Preparing[1].SetupRegistrationTime = this.AllTotalTime;
        this.Wheeldatas[0].Preparing[0].SetupRegistration = this.SelectedStaticdata;
        if (this.selectId == 'Registration tool') {
          this.SetupRGreen1 = true;
        }
        if (this.selectId == 'Registration fee') {
          this.SetupRGreen2 = true;
        }
        if (this.selectId == 'Clear Concise forms') {
          this.SetupRGreen3 = true;
        }
        if (this.selectId == 'Contact details of host') {
          this.SetupRGreen4 = true;
        }
        if (this.selectId == 'Follow-up') {
          this.SetupRGreen5 = true;
        }
      }
      //SetupRegistration end
      //marketing start
      if (this.TopicId == 'Marketing') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Preparing[1].Marketing = this.total;
        this.Wheeldatas[0].Preparing[1].MarketingTime = this.AllTotalTime;
        this.Wheeldatas[0].Preparing[0].Marketing = this.SelectedStaticdata;
        if (this.selectId == 'Promotional Material') {
          this.MarketingGreen1 = true;
        }
        if (this.selectId == 'Promoting') {
          this.MarketingGreen2 = true;
        }
        if (this.selectId == 'Follow-up') {
          this.MarketingGreen3 = true;
        }
      }
      //marketing end
      //dryrun start
      if (this.TopicId == 'Dry Run') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Preparing[1].DryRun = this.total;
        this.Wheeldatas[0].Preparing[1].DryRunTime = this.AllTotalTime;
        this.Wheeldatas[0].Preparing[0].DryRun = this.SelectedStaticdata;
        if (this.selectId == 'Introductions') {
          this.DryRunGreen1 = true;
        }
        if (this.selectId == 'Test The equipment’s') {
          this.DryRunGreen2 = true;
        }
        if (this.selectId == 'Agenda review') {
          this.DryRunGreen3 = true;
        }
        if (this.selectId == 'Presentation check') {
          this.DryRunGreen4 = true;
        }
        if (this.selectId == 'Timing') {
          this.DryRunGreen5 = true;
        }
        if (this.selectId == 'Reviewing the recording') {
          this.DryRunGreen6 = true;
        }
      }
      //dryrun end
      //preparing end
      //performing start
      //check on the connection
      if (this.TopicId == 'Check on the connections') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
        }
        this.Wheeldatas[0].Performing[1].Checkontheconnections = this.total;
        this.Wheeldatas[0].Performing[1].CheckontheconnectionsTime = this.AllTotalTime;
        this.Wheeldatas[0].Performing[0].Checkontheconnections = this.SelectedStaticdata;
        if (this.selectId == 'Check the internet speed') {
          this.Checkontheconnectiongreen1 = true;
        }
        if (this.selectId == 'Check on the equipments') {
          this.Checkontheconnectiongreen2 = true;
        }
        if (this.selectId == 'Log into platform 15-30 mins prior') {
          this.Checkontheconnectiongreen3 = true;
        }
        if (this.selectId == 'Perform a audio and video check') {
          this.Checkontheconnectiongreen4 = true;
        }
      }
      //check on the connection end
      //record webinar start
      if (this.TopicId == 'Record the webinar') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Performing[1].Recordthewebinar = this.total;
        this.Wheeldatas[0].Performing[1].RecordthewebinarTime = this.AllTotalTime;
        this.Wheeldatas[0].Performing[0].Recordthewebinar = this.SelectedStaticdata;
        if (this.selectId == 'Use a build in screen recorder download') {
          this.RecordthewebGreen1 = true;
        }
        if (this.selectId == 'Set up screen recording') {
          this.RecordthewebGreen2 = true;
        }
        if (this.selectId == 'Record the webinar') {
          this.RecordthewebGreen3 = true;
        }
        if (this.selectId == 'Edit and save') {
          this.RecordthewebGreen4 = true;
        }
      }
      //record webinar end
      //gather speaker in call
      if (this.TopicId == 'Gather speaker and call-in guests') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Performing[1].Gatherspeakerandcallinguests = this.total;
        this.Wheeldatas[0].Performing[1].GatherspeakerandcallinguestsTime = this.AllTotalTime;
        this.Wheeldatas[0].Performing[0].Gatherspeakerandcallinguests = this.SelectedStaticdata;
        if (this.selectId == 'Start the program at right time') {
          this.Gatherspeakergreen1 = true;
        }
        if (this.selectId == 'Welcome the speakers') {
          this.Gatherspeakergreen2 = true;
        }
        if (this.selectId == 'Stick to time') {
          this.Gatherspeakergreen3 = true;
        }
        if (this.selectId == 'End the program with a formal vote of thanks') {
          this.Gatherspeakergreen4 = true;
        }
      }
      //gather speaker in call end
      //promote on social media
      if (this.TopicId == 'Promote on social media') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Performing[1].Promoteonsocialmedia = this.total;
        this.Wheeldatas[0].Performing[1].PromoteonsocialmediaTime = this.AllTotalTime;
        this.Wheeldatas[0].Performing[0].Promoteonsocialmedia = this.SelectedStaticdata;
        if (this.selectId == 'Testing the equipments & connectivity') {
          this.Promoteonsocialgreen1 = true;
        }
        if (this.selectId == 'Live streaming on social media(youtube/facebook/linkedin)') {
          this.Promoteonsocialgreen2 = true;
        }
        if (this.selectId == 'Gain reach and better targeting') {
          this.Promoteonsocialgreen3 = true;
        }
      }
      ///promote on social media end
      //performing end

      //reviewing start
      //evaluate feedback start 
      if (this.TopicId == 'Evaluate the feedback') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Reviewing[1].Evaluatethefeedback = this.total;
        this.Wheeldatas[0].Reviewing[1].EvaluatethefeedbackTime = this.AllTotalTime;
        this.Wheeldatas[0].Reviewing[0].Evaluatethefeedback = this.SelectedStaticdata;
        if (this.selectId == 'Review each of the feedback points') {
          this.Evaluatethefeedgreen1 = true;
        }
        if (this.selectId == 'Discuss on the feedback with the team') {
          this.Evaluatethefeedgreen2 = true;
        }
        if (this.selectId == 'Act on the feedback') {
          this.Evaluatethefeedgreen3 = true;
        }
      }
      //evaluate feedback end 
      //plan for next webinar 
      if (this.TopicId == 'Plan for next webinar') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Reviewing[1].Planfornextwebinar = this.total;
        this.Wheeldatas[0].Reviewing[1].PlanfornextwebinarTime = this.AllTotalTime;
        this.Wheeldatas[0].Reviewing[0].Planfornextwebinar = this.SelectedStaticdata;
        if (this.selectId == 'Review the strength and weakness') {
          this.Planfornextgreen1 = true;
        }
        if (this.selectId == 'Give adequate space between the two webinars') {
          this.Planfornextgreen2 = true;
        }
        if (this.selectId == 'Start discussing with the team members') {
          this.Planfornextgreen3 = true;
        }
      }
      //plan for next webinar end
      //sending feedback
      if (this.TopicId == 'Sending feedback') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Reviewing[1].Sendingfeedback = this.total;
        this.Wheeldatas[0].Reviewing[1].SendingfeedbackTime = this.AllTotalTime;
        this.Wheeldatas[0].Reviewing[0].Sendingfeedback = this.SelectedStaticdata;
        if (this.selectId == 'Keep scale questions and multiple choice questions') {
          this.sendingfeedGreen1 = true;
        }
        if (this.selectId == 'Keep the language simple and direct') {
          this.sendingfeedGreen2 = true;
        }
        if (this.selectId == 'Link the certificate of participation with feedback') {
          this.sendingfeedGreen3 = true;
        }
        if (this.selectId == 'send the feedback link within 2 hours of webinar ends') {
          this.sendingfeedGreen4 = true;
        }
      }
      //sending feedback end
      //•	Collecting the materials and sharing
      if (this.TopicId == 'Collecting the materials and sharing') {
        this.total = 0;
        this.AllTotalTime = 0;
        for (let i = 0; i < this.SelectedStaticdata.length; i++) {
          this.total = parseFloat(this.total) + parseFloat(this.SelectedStaticdata[i].Percentage);
          this.AllTotalTime = parseFloat(this.AllTotalTime) + parseFloat(this.SelectedStaticdata[i].TotalTime);
        }
        this.Wheeldatas[0].Reviewing[1].Collectingthematerialsandsharing = this.total;
        this.Wheeldatas[0].Reviewing[1].CollectingthematerialsandsharingTime = this.AllTotalTime;
        this.Wheeldatas[0].Reviewing[0].Collectingthematerialsandsharing = this.SelectedStaticdata;
        if (this.selectId == 'Request and collect the webinar materials from speakers') {
          this.CollectGreen1 = true;
        }
        if (this.selectId == 'Send the certificate of appreciation to resource persons') {
          this.CollectGreen2 = true;
        }
        if (this.selectId == 'Share the materials to participant through mail') {
          this.CollectGreen3 = true;
        }
        if (this.selectId == 'Share the materials within 3 days of completing webinar') {
          this.CollectGreen4 = true;
        }
      }
      //•	Collecting the materials and sharing end
      //reviewing end
      this.apiService.create('WebinarStatus', { wheelData: JSON.stringify(this.Wheeldatas), WebinarId: this.WebinarId, UserId: this.UserDetail.reg_Id }).subscribe((response) => {
        if ((response as any).isSuccess) {
          this.Select = "Undo";
        }
      })
    }

  }
  Experience(e) {
    if (this.RExperience) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.experience = true;
    this.expertise = false;
    this.timeManagement = false;
    this.availability = false;
    this.adaptability = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = true;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  //planning Click start
  // recruit speekar start
  Expertise(e) {

    if (this.RExpertise) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.experience = false;
    this.expertise = true;
    this.timeManagement = false;
    this.availability = false;
    this.adaptability = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = true;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  TimeManagement(e) {

    if (this.RTimeManagement) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.experience = false;
    this.expertise = false;
    this.timeManagement = true;
    this.availability = false;
    this.adaptability = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = true;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Availability(e) {

    if (this.RAvailability) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.experience = false;
    this.expertise = false;
    this.timeManagement = false;
    this.availability = true;
    this.adaptability = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
this.BtnShow = true;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = true;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Adaptability(e) {
    if (this.RAdaptability) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.experience = false;
    this.expertise = false;
    this.timeManagement = false;
    this.availability = false;
    this.adaptability = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = true;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  // recruit speekar end
  // assing role start
  organizer(e) {
    if (this.Organizer) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.porganizer = true;
    this.ppresenter = false;
    this.passistant = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = true;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;

  }
  presenter(e) {
    if (this.Presenter) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.porganizer = false;
    this.ppresenter = true;
    this.passistant = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = true;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;


  }
  assistant(e) {
    if (this.Assistant) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.porganizer = false;
    this.ppresenter = false;
    this.passistant = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = true;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;

  }
  // assing role end
  //Deciding On the Topic start
  Deciding1(e) {
    if (this.Setgoalsobjectives) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.decidingTopic1 = true;
    this.decidingTopic2 = false;
    this.decidingTopic3 = false;
    this.decidingTopic4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = true;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;

  }
  Deciding2(e) {
    if (this.Determine) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.decidingTopic1 = false;
    this.decidingTopic2 = true;
    this.decidingTopic3 = false;
    this.decidingTopic4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = true;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;


  }
  Deciding3(e) {
    if (this.Maketopics) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.decidingTopic1 = false;
    this.decidingTopic2 = false;
    this.decidingTopic3 = true;
    this.decidingTopic4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = true;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Deciding4(e) {
    if (this.fixtopic) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.decidingTopic1 = false;
    this.decidingTopic2 = false;
    this.decidingTopic3 = false;
    this.decidingTopic4 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = true;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;

  }
  //Deciding On the Topic end
  //Deciding On the Plat from start
  DecidingPlatForm1(e) {
    if (this.DecidingPlatMainGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.DecidingPlatFormClick1 = true;
    this.DecidingPlatFormClick2 = false;
    this.DecidingPlatFormClick3 = false;
    this.DecidingPlatFormClick4 = false;
    this.DecidingPlatFormClick5 = false;
    this.DecidingPlatFormClick6 = false;
    this.DecidingPlatFormClick7 = false;
    this.DecidingPlatFormClick8 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = true;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DecidingPlatForm2(e) {
    if (this.DecidingPlatMainGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.DecidingPlatFormClick1 = false;
    this.DecidingPlatFormClick2 = true;
    this.DecidingPlatFormClick3 = false;
    this.DecidingPlatFormClick4 = false;
    this.DecidingPlatFormClick5 = false;
    this.DecidingPlatFormClick6 = false;
    this.DecidingPlatFormClick7 = false;
    this.DecidingPlatFormClick8 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = true;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DecidingPlatForm3(e) {
    if (this.DecidingPlatMainGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.DecidingPlatFormClick1 = false;
    this.DecidingPlatFormClick2 = false;
    this.DecidingPlatFormClick3 = true;
    this.DecidingPlatFormClick4 = false;
    this.DecidingPlatFormClick5 = false;
    this.DecidingPlatFormClick6 = false;
    this.DecidingPlatFormClick7 = false;
    this.DecidingPlatFormClick8 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = true;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DecidingPlatForm4(e) {
    if (this.DecidingPlatMainGreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.DecidingPlatFormClick1 = false;
    this.DecidingPlatFormClick2 = false;
    this.DecidingPlatFormClick3 = false;
    this.DecidingPlatFormClick4 = true;
    this.DecidingPlatFormClick5 = false;
    this.DecidingPlatFormClick6 = false;
    this.DecidingPlatFormClick7 = false;
    this.DecidingPlatFormClick8 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = true;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DecidingPlatForm5(e) {
    if (this.DecidingPlatMainGreen5) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.DecidingPlatFormClick1 = false;
    this.DecidingPlatFormClick2 = false;
    this.DecidingPlatFormClick3 = false;
    this.DecidingPlatFormClick4 = false;
    this.DecidingPlatFormClick5 = true;
    this.DecidingPlatFormClick6 = false;
    this.DecidingPlatFormClick7 = false;
    this.DecidingPlatFormClick8 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = true;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DecidingPlatForm6(e) {
    if (this.DecidingPlatMainGreen6) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.DecidingPlatFormClick1 = false;
    this.DecidingPlatFormClick2 = false;
    this.DecidingPlatFormClick3 = false;
    this.DecidingPlatFormClick4 = false;
    this.DecidingPlatFormClick5 = false;
    this.DecidingPlatFormClick6 = true;
    this.DecidingPlatFormClick7 = false;
    this.DecidingPlatFormClick8 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = true;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DecidingPlatForm7(e) {
    if (this.DecidingPlatMainGreen7) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.DecidingPlatFormClick1 = false;
    this.DecidingPlatFormClick2 = false;
    this.DecidingPlatFormClick3 = false;
    this.DecidingPlatFormClick4 = false;
    this.DecidingPlatFormClick5 = false;
    this.DecidingPlatFormClick6 = false;
    this.DecidingPlatFormClick7 = true;
    this.DecidingPlatFormClick8 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = true;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DecidingPlatForm8(e) {
    if (this.DecidingPlatMainGreen8) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    } this.BtnShow = true;
    this.DecidingPlatFormClick1 = false;
    this.DecidingPlatFormClick2 = false;
    this.DecidingPlatFormClick3 = false;
    this.DecidingPlatFormClick4 = false;
    this.DecidingPlatFormClick5 = false;
    this.DecidingPlatFormClick6 = false;
    this.DecidingPlatFormClick7 = false;
    this.DecidingPlatFormClick8 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = true;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  // Deciding On the Plat from End
  //planning Click end
  //prepare Click start
  //prepare Eq start
  Preparequipments1(e) {
    if (this.PrepareEqGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    } this.BtnShow = true;
    this.preparequipments1 = true;
    this.preparequipments2 = false;
    this.preparequipments3 = false;
    this.preparequipments4 = false;
    this.preparequipments5 = false;
    this.preparequipments6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = true;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Preparequipments2(e) {
    if (this.PrepareEqGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    } this.BtnShow = true;
    this.preparequipments1 = false;
    this.preparequipments2 = true;
    this.preparequipments3 = false;
    this.preparequipments4 = false;
    this.preparequipments5 = false;
    this.preparequipments6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = true;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Preparequipments3(e) {
    if (this.PrepareEqGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    } 
    this.BtnShow = true;
    this.preparequipments1 = false;
    this.preparequipments2 = false;
    this.preparequipments3 = true;
    this.preparequipments4 = false;
    this.preparequipments5 = false;
    this.preparequipments6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = true;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Preparequipments4(e) {
    if (this.PrepareEqGreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.preparequipments1 = false;
    this.preparequipments2 = false;
    this.preparequipments3 = false;
    this.preparequipments4 = true;
    this.preparequipments5 = false;
    this.preparequipments6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = true;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Preparequipments5(e) {
    if (this.PrepareEqGreen5) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.preparequipments1 = false;
    this.preparequipments2 = false;
    this.preparequipments3 = false;
    this.preparequipments4 = false;
    this.preparequipments5 = true;
    this.preparequipments6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = true;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Preparequipments6(e) {
    if (this.PrepareEqGreen6) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.preparequipments1 = false;
    this.preparequipments2 = false;
    this.preparequipments3 = false;
    this.preparequipments4 = false;
    this.preparequipments5 = false;
    this.preparequipments6 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = true;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  //prepare end
  //setup Register start
  SetupR1(e) {
    if (this.SetupRGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.setupR1 = true;
    this.setupR2 = false;
    this.setupR3 = false;
    this.setupR4 = false;
    this.setupR5 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = true;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  SetupR2(e) {
    if (this.SetupRGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.setupR1 = false;
    this.setupR2 = true;
    this.setupR3 = false;
    this.setupR4 = false;
    this.setupR5 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = true;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  SetupR3(e) {
    if (this.SetupRGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.setupR1 = false;
    this.setupR2 = false;
    this.setupR3 = true;
    this.setupR4 = false;
    this.setupR5 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = true;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  SetupR4(e) {
    if (this.SetupRGreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.setupR1 = false;
    this.setupR2 = false;
    this.setupR3 = false;
    this.setupR4 = true;
    this.setupR5 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = true;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  SetupR5(e) {
    if (this.SetupRGreen5) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.setupR1 = false;
    this.setupR2 = false;
    this.setupR3 = false;
    this.setupR4 = false;
    this.setupR5 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = true;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  //setup Register end
  //marketting start
  Marketing1(e) {
    if (this.MarketingGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.marketing1 = true;
    this.marketing2 = false;
    this.marketing3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = true;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Marketing2(e) {
    if (this.MarketingGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.marketing1 = false;
    this.marketing2 = true;
    this.marketing3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = true;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Marketing3(e) {
    if (this.MarketingGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.marketing1 = false;
    this.marketing2 = false;
    this.marketing3 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = true;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  //marketting end
  // dry run start
  DryRun1(e) {
    if (this.DryRunGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.dryRun1 = true;
    this.dryRun2 = false;
    this.dryRun3 = false;
    this.dryRun4 = false;
    this.dryRun5 = false;
    this.dryRun6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = true;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DryRun2(e) {
    if (this.DryRunGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.dryRun1 = false;
    this.dryRun2 = true;
    this.dryRun3 = false;
    this.dryRun4 = false;
    this.dryRun5 = false;
    this.dryRun6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = true;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DryRun3(e) {
    if (this.DryRunGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.dryRun1 = false;
    this.dryRun2 = false;
    this.dryRun3 = true;
    this.dryRun4 = false;
    this.dryRun5 = false;
    this.dryRun6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = true;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DryRun4(e) {
    if (this.DryRunGreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.dryRun1 = false;
    this.dryRun2 = false;
    this.dryRun3 = false;
    this.dryRun4 = true;
    this.dryRun5 = false;
    this.dryRun6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = true;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DryRun5(e) {
    if (this.DryRunGreen5) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.dryRun1 = false;
    this.dryRun2 = false;
    this.dryRun3 = false;
    this.dryRun4 = false;
    this.dryRun5 = true;
    this.dryRun6 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = true;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  DryRun6(e) {
    if (this.DryRunGreen6) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.dryRun1 = false;
    this.dryRun2 = false;
    this.dryRun3 = false;
    this.dryRun4 = false;
    this.dryRun5 = false;
    this.dryRun6 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = true;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  // dry run end
  //prepare Click end
  //performing start
  //CHECK ON THE CONNECTION
  CheckConnect1(e) {
    if (this.Checkontheconnectiongreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.CHECKconnect1 = true;
    this.CHECKconnect2 = false;
    this.CHECKconnect3 = false;
    this.CHECKconnect4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = true;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  CheckConnect2(e) {
    if (this.Checkontheconnectiongreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.CHECKconnect1 = false;
    this.CHECKconnect2 = true;
    this.CHECKconnect3 = false;
    this.CHECKconnect4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = true;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  CheckConnect3(e) {
    if (this.Checkontheconnectiongreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.CHECKconnect1 = false;
    this.CHECKconnect2 = false;
    this.CHECKconnect3 = true;
    this.CHECKconnect4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = true;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  CheckConnect4(e) {
    if (this.Checkontheconnectiongreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.CHECKconnect1 = false;
    this.CHECKconnect2 = false;
    this.CHECKconnect3 = false;
    this.CHECKconnect4 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = true;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }

  //CHECK ON THE CONNECTION END
  //recordwebinar start
  RecordWebinar1(e) {
    if (this.RecordthewebGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.recweb1 = true;
    this.recweb2 = false;
    this.recweb3 = false;
    this.recweb4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = true;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  RecordWebinar2(e) {
    if (this.RecordthewebGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.recweb1 = false;
    this.recweb2 = true;
    this.recweb3 = false;
    this.recweb4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = true;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  RecordWebinar3(e) {
    if (this.RecordthewebGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.recweb1 = false;
    this.recweb2 = false;
    this.recweb3 = true;
    this.recweb4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = true;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  RecordWebinar4(e) {
    if (this.RecordthewebGreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.recweb1 = false;
    this.recweb2 = false;
    this.recweb3 = false;
    this.recweb4 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = true;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  //recordwebinar end
  //gather speaker in call 
  GatherSpeaker1(e) {
    if (this.Gatherspeakergreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Gather1 = true;
    this.Gather2 = false;
    this.Gather3 = false;
    this.Gather4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = true;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  GatherSpeaker2(e) {
    if (this.Gatherspeakergreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Gather1 = false;
    this.Gather2 = true;
    this.Gather3 = false;
    this.Gather4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = true;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  GatherSpeaker3(e) {
    if (this.Gatherspeakergreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Gather1 = false;
    this.Gather2 = false;
    this.Gather3 = true;
    this.Gather4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = true;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  GatherSpeaker4(e) {
    if (this.Gatherspeakergreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Gather1 = false;
    this.Gather2 = false;
    this.Gather3 = false;
    this.Gather4 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = true;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }

  //gather speaker in call end
  //promote on social media
  PromoteonsocialM1(e) {
    if (this.Promoteonsocialgreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Promote1 = true;
    this.Promote2 = false;
    this.Promote3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = true;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  PromoteonsocialM2(e) {
    if (this.Promoteonsocialgreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Promote1 = false;
    this.Promote2 = true;
    this.Promote3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = true;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  PromoteonsocialM3(e) {
    if (this.Promoteonsocialgreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Promote1 = false;
    this.Promote2 = false;
    this.Promote3 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = true;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  //promote on social media  end
  //performing end
  //reviewing start
  //evaluate feedback start
  EvaluateFeedback1(e) {
    if (this.Evaluatethefeedgreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.EvaFeedback1 = true;
    this.EvaFeedback2 = false;
    this.EvaFeedback3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = true;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  EvaluateFeedback2(e) {
    if (this.Evaluatethefeedgreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.EvaFeedback1 = false;
    this.EvaFeedback2 = true;
    this.EvaFeedback3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = true;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  EvaluateFeedback3(e) {
    if (this.Evaluatethefeedgreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.EvaFeedback1 = false;
    this.EvaFeedback2 = false;
    this.EvaFeedback3 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = true;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  //evaluate feedback end 
  //plan for next webinar
  PlanWebinar1(e) {
    if (this.Planfornextgreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Plan1 = true;
    this.Plan2 = false;
    this.Plan3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = true;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  PlanWebinar2(e) {
    if (this.Planfornextgreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Plan1 = false;
    this.Plan2 = true;
    this.Plan3 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = true;
    this.PlanFNCont3 = false;
  }
  PlanWebinar3(e) {
    if (this.Planfornextgreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Plan1 = false;
    this.Plan2 = false;
    this.Plan3 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = true;
  }
  //end of then plan for next webinar
  // SENDING FEEDBACK
  SendingFeedback1(e) {
    if (this.sendingfeedGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Send1 = true;
    this.Send2 = false;
    this.Send3 = false;
    this.Send4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = true;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  SendingFeedback2(e) {
    if (this.sendingfeedGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Send1 = false;
    this.Send2 = true;
    this.Send3 = false;
    this.Send4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = true;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  SendingFeedback3(e) {
    if (this.sendingfeedGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Send1 = false;
    this.Send2 = false;
    this.Send3 = true;
    this.Send4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = true;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  SendingFeedback4(e) {
    if (this.sendingfeedGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Send1 = false;
    this.Send2 = false;
    this.Send3 = false;
    this.Send4 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = true;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  // SENDING FEEDBACK END
  // •	Collecting the materials and sharing
  Collectingthematerial1(e) {
    if (this.CollectGreen1) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Collect1 = true;
    this.Collect2 = false;
    this.Collect3 = false;
    this.Collect4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = true;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Collectingthematerial2(e) {
    if (this.CollectGreen2) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Collect1 = false;
    this.Collect2 = true;
    this.Collect3 = false;
    this.Collect4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = true;
    this.ColMatCont3 = false;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Collectingthematerial3(e) {
    if (this.CollectGreen3) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Collect1 = false;
    this.Collect2 = false;
    this.Collect3 = true;
    this.Collect4 = false;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;

    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = true;
    this.ColMatCont4 = false;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  Collectingthematerial4(e) {
    if (this.CollectGreen4) {
      this.Select = "Undo";
    }
    else {
      this.Select = "Done";
    }
    this.BtnShow = true;
    this.Collect1 = false;
    this.Collect2 = false;
    this.Collect3 = false;
    this.Collect4 = true;
    this.selectId = e.currentTarget.id;
    this.selectValue = e.currentTarget.attributes.value.value;
    this.Decided = false;
    this.Decided1 = false;
    this.Decided2 = false;
    this.Decided3 = false;
    this.Decided4 = false;

    this.AssigningCont = false;
    this.AssigningCont1 = false;
    this.AssigningCont2 = false;
    this.AssigningCont3 = false;

    this.RecrtContent = false;
    this.RecrtContent1 = false;
    this.RecrtContent2 = false;
    this.RecrtContent3 = false;
    this.RecrtContent4 = false;
    this.RecrtContent5 = false;

    this.DplatContnt = false;
    this.DplatContnt1 = false;
    this.DplatContnt2 = false;
    this.DplatContnt3 = false;
    this.DplatContnt4 = false;
    this.DplatContnt5 = false;
    this.DplatContnt6 = false;
    this.DplatContnt7 = false;
    this.DplatContnt8 = false;

    this.PreEquipCont = false;
    this.PreEquipCont1 = false;
    this.PreEquipCont2 = false;
    this.PreEquipCont3 = false;
    this.PreEquipCont4 = false;
    this.PreEquipCont5 = false;
    this.PreEquipCont6 = false;

    this.SetupCont = false;
    this.SetupCont1 = false;
    this.SetupCont2 = false;
    this.SetupCont3 = false;
    this.SetupCont4 = false;
    this.SetupCont5 = false;

    this.Marketingcont = false;
    this.Marketingcont1 = false;
    this.Marketingcont2 = false;
    this.Marketingcont3 = false;

    this.DryCont = false;
    this.DryCont1 = false;
    this.DryCont2 = false;
    this.DryCont3 = false;
    this.DryCont4 = false;
    this.DryCont5 = false;
    this.DryCont6 = false;

    this.CconectCont = false;
    this.CconectCont1 = false;
    this.CconectCont2 = false;
    this.CconectCont3 = false;
    this.CconectCont4 = false;

    this.RecWebCont = false;
    this.RecWebCont1 = false;
    this.RecWebCont2 = false;
    this.RecWebCont3 = false;
    this.RecWebCont4 = false;

    this.PrmoteSContnt = false;
    this.PrmoteSContnt1 = false;
    this.PrmoteSContnt2 = false;
    this.PrmoteSContnt3 = false;

    this.GatherCont = false;
    this.GatherCont1 = false;
    this.GatherCont2 = false;
    this.GatherCont3 = false;
    this.GatherCont4 = false;

    this.SendFeedCont = false;
    this.SendFeedCont1 = false;
    this.SendFeedCont2 = false;
    this.SendFeedCont3 = false;
    this.SendFeedCont4 = false;

    this.ColMatCont = false;
    this.ColMatCont1 = false;
    this.ColMatCont2 = false;
    this.ColMatCont3 = false;
    this.ColMatCont4 = true;

    this.EvalCOnt = false;
    this.EvalCOnt1 = false;
    this.EvalCOnt2 = false;
    this.EvalCOnt3 = false;

    this.PlanFNCont = false;
    this.PlanFNCont1 = false;
    this.PlanFNCont2 = false;
    this.PlanFNCont3 = false;
  }
  // •	Collecting the materials and sharing end
  //reviewing end
  async presentModal() {
    let id = this.WebinarId
     
    this.apiService.getAll('WSelectTime', { WebinarId: id}).subscribe(async(response) =>  { 
      let UsedCollapse = (response as any).data;
      if (UsedCollapse[0].selectHelp == 0) { 
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
}
