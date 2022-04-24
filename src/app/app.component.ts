import { Component } from '@angular/core';
import { MenuController, AlertController, Platform, ToastController, ModalController } from '@ionic/angular';
import { LoginService } from '../app/login.service'
import { Router } from '@angular/router';
import { AppService } from './shared/api-services/app.service';
import { Wheeldata, Service } from './../app/apiservice/staicdata';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OfflinePage } from './offline/offline.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [AppService, Service, Network]

})
export class AppComponent {
  Wheeldatas: Wheeldata[];
  UserType: any;
  appPages: { title: string; url: string; icon: string; }[];
  connected: any;
  appReference: any;
  TotalWebinar: any = 0;
  OFFLINE: any = false;
  public selectedIndex = 0;
  constructor(private menu: MenuController, public modalController: ModalController, private toastCtrl: ToastController, private platform: Platform, private statusBar: StatusBar, private globalTransfer: LoginService, private route: Router, public alertCtrl: AlertController, public apiService:
    AppService, public service: Service, public network: Network, public dialogs: Dialogs) {



    this.network.onDisconnect().subscribe(() => {

      setTimeout(async () => {
        const offline = await this.modalController.create({
          component: OfflinePage,
          cssClass: 'my-custom-class'
        });
        return await offline.present();
      }, 1000);
    });
    // disconnectSubscription.unsubscribe();

    // let connectSubcription = this.network.onConnect().subscribe(() => {
    // });




    this.UserType = JSON.parse(localStorage.getItem('UserDetail'));
    //let ExitData = JSON.parse(localStorage.getItem('ExitApp'));
    if (localStorage.getItem('isFirst') == null) {
      this.route.navigate(['/getstart']);
    }
    else if (localStorage.getItem('UserDetail') == null) {
      localStorage.setItem("Signin", "signin");
      this.route.navigate(['/register']);
    }
    // else if (ExitData != null) {
    //   localStorage.removeItem('ExitApp');
    //   if (ExitData.path == 'collapse') {
    //     this.route.navigate(['/collapse'], { queryParams: { WebinarId: ExitData.WebinarId, Webinartype: ExitData.Webinartype } });
    //   }
    //   else {
    //     this.apiService.create('getSingleWebinarDetail', { WebinarId: ExitData.WebinarId, Webinartype: ExitData.Webinartype }).subscribe((response) => {
    //       if ((response as any).isSuccess) {
    //         let webinarStatus = (response as any).data1;
    //         if (webinarStatus != 'No Record') {
    //           this.route.navigate(['/webinarselect'], { queryParams: { NodeId: ExitData.NodeId, WebinarId: ExitData.WebinarId, NodeCount: ExitData.NodeCount, Wheeldatas: webinarStatus[0].web_data, Webinartype: ExitData.Webinartype } });
    //         }
    //         else {
    //           this.Wheeldatas = this.service.getWheeldata();
    //           this.route.navigate(['/webinarselect'], { queryParams: { NodeId: ExitData.NodeId, WebinarId: ExitData.WebinarId, NodeCount: ExitData.NodeCount, Wheeldatas: JSON.stringify(this.Wheeldatas), Webinartype: ExitData.Webinartype } });
    //         }
    //       }
    //     })

    //   }
    // }
    else if (localStorage.getItem('UserDetail') != null) {
      this.apiService.create('AppUsage', { UserId: this.UserType.reg_Id, UserType: this.UserType.reg_UserType }).subscribe(async (response) => {
        if ((response as any).isSuccess) {
          let values = (response as any).data[0].datas;
          let data = {
            UserType: this.UserType.reg_UserType,
            WebinarCount: values
          }
          this.userTypes(data);
          if (this.UserType.reg_UserType == 'Admin') {
            if (this.UserType.reg_FirstLogin <= '1') {
              this.route.navigate(['/mywebinar']);
            }
            else {
              this.route.navigate(['/admin-welcome']);
            }
          }
          else {
            if (this.UserType.reg_FirstLogin <= '1') {
              this.route.navigate(['/mywebinar']);
            }
            else {
              this.route.navigate(['/welcome']);
            }
          }
        }
      })
    }
    this.initializeApp();
    //this.checkForNetwork();

  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }




  initializeApp() {
    this.globalTransfer.getObservable().subscribe((data) => {
      // this.splashScreen.hide();
      this.userTypes(data);
    });
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      // this.statusBar.backgroundColorByHexString("#33000000");
      this.statusBar.styleBlackTranslucent();
      // this.splashScreen.hide();
    });
  }
  userTypes(data) {
    setTimeout(() => {
      this.TotalWebinar = data.WebinarCount;
      if (data.UserType == "Admin") {
        this.menu.enable(true);
        this.appPages = [
          { title: 'My Profile', url: '/personal-detaills', icon: '/assets/img/1.svg' },
          { title: 'Records', url: '/admin-records', icon: '/assets/img/36.svg' },
          { title: 'My Webinar', url: '/mywebinar', icon: '/assets/img/28.svg' },
          { title: 'About Us', url: '/about', icon: '/assets/img/29.svg' },
          { title: 'Help', url: '/helpvideo', icon: '/assets/img/27.svg' },
          { title: 'Sign Out', url: '/#', icon: '/assets/img/30.svg' }
        ];
      }
      else if (data.UserType == "User") {
        this.TotalWebinar = data.WebinarCount;
        this.menu.enable(true);
        this.appPages = [
          { title: 'My Profile', url: '/personal-detaills', icon: '/assets/img/1.svg' },
          { title: 'My Webinar', url: '/mywebinar', icon: '/assets/img/28.svg' },
          { title: 'About Us', url: '/about', icon: '/assets/img/29.svg' },
          { title: 'Help', url: '/helpvideo', icon: '/assets/img/27.svg' },
          { title: 'Sign Out', url: '/#', icon: '/assets/img/30.svg' }
        ];
      }
    }, 3000)


  }
  async SignOut(e) {
    if (e == "Sign Out") {
      this.alertCtrl.create({
        cssClass: 'my-user',
        message: '<ion-icon class="ialert" src="../../assets/img/16.svg"></ion-icon> <h2>Do you want Sign out ! </b></h2> <h3>Confirm</h3>',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel',
        }, {
          text: 'Okay',
          role: 'ok',
          cssClass: 'okey',
          handler: () => {
            if (e == "Sign Out") {
              localStorage.removeItem('UserDetail');
              sessionStorage.removeItem('mywebinar');
              localStorage.setItem("Signin", "signin");
              this.route.navigate(['/register']);
              this.presentToast("SignOut successfully..");
              localStorage.removeItem('UserDetail');
            }
          }
        }]
      }).then(res => {
        res.present();
      });
    }



  }
  openEnd() {
    this.menu.close();
  }

  ngOnInit() {
    const path = window.location.pathname.split("app/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        page => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  refreshing(event: any) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
}
