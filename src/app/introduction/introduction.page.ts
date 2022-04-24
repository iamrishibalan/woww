import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MacrohelpPage } from '../macrohelp/macrohelp.page';
import { AppService } from '../shared/api-services/app.service';
import { AdminPage } from '../admin/admin.page';
import { UserPage } from '../user/user.page';
// import { LoadingService } from '../apiservice/loading.services';

let base;
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
  providers: [AppService]
})
export class IntroductionPage implements OnInit {
  newWebinardetail: any;
  userDetail: any = {};
  WebinarDetail: any = {};
  details: Array<any> = []; z
  constructor(private route: Router, public modalController: ModalController, public activatedRoute: ActivatedRoute, public apiService: AppService) {
    this.newWebinardetail = JSON.parse(sessionStorage.getItem('mywebinar'));
    base = this;
    localStorage.removeItem('ExitApp');

  }

  ngOnInit() {
    // this.loading.present();
    this.activatedRoute.queryParams.subscribe((res) => {
      this.apiService.create('getSingleWebinarDetail', { WebinarId: res.WebinarId, Webinartype: res.Webinartype }).subscribe((response) => {
        if ((response as any).isSuccess) {
          // this.loading.dismiss();
          base.WebinarDetail = (response as any).data[0];
        }
        else {
          // this.loading.dismiss();
        }
      })
    });
    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));
    this.apiService.getAll('getAllWebinar', { UserId: this.userDetail.reg_Id }).subscribe((response) => {
      if ((response as any).isSuccess) {
        this.details = (response as any).data;
        this.details.length;
      }
    })
  }


  async presentModal() {
    const macrohelp = await this.modalController.create({
      component: MacrohelpPage,
      cssClass: 'my-custom-class'
    });
    return await macrohelp.present();
  }
  
  Collapse() {
    this.route.navigate(['/expand']);
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
  GetStart() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.route.navigate(['/collapse'], { queryParams: { WebinarId: res.WebinarId, Webinartype: res.Webinartype , UserId: this.userDetail.reg_Id} });
    });
  }
}
