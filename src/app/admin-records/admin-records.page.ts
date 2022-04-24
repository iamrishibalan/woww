import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { FilterPage } from '../Filter/Filter.page';
import { AdminPage } from '../admin/admin.page';
import { WebinaruserPage } from '../Webinaruser/Webinaruser.page';
import { AppService } from '../shared/api-services/app.service';
import { CONST } from '../apiservice/api.constant'
import { HelpPage } from '../help/help.page';
import { LoadingService } from '../apiservice/loading.services';
import { Zip } from '@ionic-native/zip/ngx';
import { OfflinePage } from '../offline/offline.page'
let base;
@Component({
  selector: 'app-admin-records',
  templateUrl: './admin-records.page.html',
  styleUrls: ['./admin-records.page.scss'],
  providers: [AppService]
})
export class AdminRecordsPage implements OnInit {
  public load = false;
  RecordDetail: any;
  searchText: any;
  adminlogo: boolean = false;
  recordlogo: boolean = false;
  filter_valuse: boolean = false;
  resultcount: any = -1;
  count: any = 0;
  apiUrl: any;
  constructor(public menuCtrl: MenuController, private zip: Zip, public loaderCtrl: LoadingController, public loading: LoadingService, public activatedRoute: ActivatedRoute, private route: Router, public modalController: ModalController, public apiService: AppService) {
    this.menuCtrl.enable(false, 'myMenu');
    localStorage.removeItem('ExitApp');
    this.apiUrl = CONST.ApiUrlss;
    this.searchText;
  }
  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      if (res.filterdata != undefined) {
        this.RecordDetail = JSON.parse(res.filterdata);
        if (res.resultCount != -1) {
          this.resultcount = res.resultCount;
          this.filter_valuse = true;
        }
      }
      else {
        this.load = true;
        this.apiService.getAll('AdminRecord', { LoginType: 'Admin' }).subscribe((response) => {
          if ((response as any).isSuccess) {
            this.RecordDetail = (response as any).data;
            this.count = this.RecordDetail.length;
            this.filter_valuse = false;
            this.load = false;
          }
        })
      }
    });
  }
  async presentModal() {
    const help = await this.modalController.create({
      component: HelpPage,
      cssClass: 'my-custom-class'
    });
    return await help.present();
  }
  async Update() {
    this.adminlogo = true;
    const Admin = await this.modalController.create({
      component: AdminPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }

  records() {
    this.recordlogo = true;
    this.route.navigate(['/admin-records']);
  }
  refresh() {
    debugger
    this.load = true;
    this.apiService.getAll('AdminRecord', { LoginType: 'Admin' }).subscribe((response) => {
      if ((response as any).isSuccess) {
        this.RecordDetail = (response as any).data;
        this.count = this.RecordDetail.length;
        this.filter_valuse = false;
        this.load = false;
      }
    })
  }
  async fillter() {
    this.route.navigate(['/filter'])
  }
  async adminwebinar(e, id, type) {
    let params = {
      Id: id,
      UserType: type
    }
    this.route.navigate(['/admin-records']);
    localStorage.setItem('UserWebinar', JSON.stringify(params));
    this.route.navigate(['/webinaruser'])
    // this.route.navigate(['/logs'])
  }

  Pdfdownload(UserId) {
    this.load = true;
    this.apiService.create('BulkPdfdownload', { UserId: UserId }).subscribe((response) => {
      if ((response as any).isSuccess) {
        setTimeout(async () => {
          window.location.href = this.apiUrl + "/gettripPdffilePaths/archive.zip";
        }, 5000);
        this.load = false;
      }
    })
  }

}
