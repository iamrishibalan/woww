import { AfterViewInit, Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AppService } from '../shared/api-services/app.service'
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicModule, NavController, LoadingController, ToastController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
  providers: [AppService],
})
@NgModule({
  imports: [IonicModule.forRoot()]
})
export class FilterPage implements OnInit {
  public load = false;
  public loading: any;

  Professionfilter: any = {
    ProfessionList: [],
    SelectedProfessionList: [],
  }
  Institutionfilter: any = {
    InstitutionList: [],
    SelectedInstitutionList: [],
  }
  Departmentfilter: any = {
    DeparmentList: [],
    SelectedDeparmentList: [],
  }
  Purposefilter: any = {
    PurposeList: [],
    SelectedPurposeList: [],
  }
  Placefilter: any = {
    PlaceList: [],
    SelectedPlaceList: [],
  }
  isDisabled: boolean = false;
  checked: any;
  filterForm: FormGroup;
  shown: boolean = false;
  profession: Array<any> = [];
  institution: Array<any> = [];
  department: Array<any> = [];
  purpose: Array<any> = [];
  place: Array<any> = [];
  datas: Array<any> = [];
  UserDetails: any = {};
  Admin: any;
  User: any;
  constructor(public activatedRoute: ActivatedRoute, public modalController: ModalController, public menuCtrl: MenuController, public navCtrl: NavController, private route: Router,
    public loaderCtrl: LoadingController, private toastCtrl: ToastController, public apiService: AppService) {
    let usertype = "All";
    localStorage.removeItem('ExitApp');
    this.load = true;
    this.apiService.getAll('professionalDetail', { usertype: usertype }).subscribe((response) => {
      this.load = false;
      if ((response as any).isSuccess) {
        var master = (response as any).data;
        this.Professionfilter.ProfessionList = master.map(x => {
          return { selected: false, reg_Profession: x.reg_Profession }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Profession == b.reg_Profession).length == 0) a.push(b);
          return a;
        }, []);
        // console.log(this.Professionfilter.ProfessionList );
        // this.institution = (response as any).data;
        this.Institutionfilter.InstitutionList = master.map(x => {
          return { selected: false, reg_Institution: x.reg_Institution }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Institution == b.reg_Institution).length == 0) a.push(b);
          return a;
        }, []);

        this.Departmentfilter.DeparmentList = master.map(x => {
          return { selected: false, reg_Department: x.reg_Department }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Department == b.reg_Department).length == 0) a.push(b);
          return a;
        }, []);
        this.Purposefilter.PurposeList = master.map(x => {
          return { selected: false, reg_Purpose: x.reg_Purpose }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Purpose == b.reg_Purpose).length == 0) a.push(b);
          return a;
        }, []);
        this.Placefilter.PlaceList = master.map(x => {
          return { selected: false, reg_Place: x.reg_Place }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Place == b.reg_Place).length == 0) a.push(b);
          return a;
        }, []);

      }
    })
  }
  ngOnInit() {
    this.filterForm = new FormGroup({
      profession: new FormControl('', []),
      institution: new FormControl('', []),
      department: new FormControl('', []),
      purpose: new FormControl('', []),
      place: new FormControl('', [])
    })
  }
  async showLoading() {
    if (!this.loading) {
      this.loading = await this.loaderCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
      await this.loading.present();
    }
  }
  clearProfession(id) {
    this.Professionfilter.SelectedProfessionList = this.Professionfilter.SelectedProfessionList.filter(obj => obj !== id);
  }
  ClearDepartment(id) {
    this.Departmentfilter.SelectedDeparmentList = this.Departmentfilter.SelectedDeparmentList.filter(obj => obj !== id);
  }
  ClearPurpose(id) {
    this.Purposefilter.SelectedPurposeList = this.Purposefilter.SelectedPurposeList.filter(obj => obj !== id);
  }
  ClearPlace(id) {
    this.Placefilter.SelectedPlaceList = this.Placefilter.SelectedPlaceList.filter(obj => obj !== id);
  }
  userclick(e) {
    this.User = e.target.checked;
    let usertype = "All";
    if (this.User == false && this.Admin == false) {
      usertype = "All";
    }
    else if (this.User == true && this.Admin == false) {
      usertype = "Admin";
    }
    else if (this.User == false) {
      usertype = "User";
    }
    else {
      usertype = "All";
    }
    this.load = true;
    this.apiService.getAll('professionalDetail', { usertype: usertype }).subscribe((response) => {
      this.load =false;
      if ((response as any).isSuccess) {
        var master = (response as any).data;
        this.Professionfilter.ProfessionList = master.map(x => {
          return { selected: false, reg_Profession: x.reg_Profession }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Profession == b.reg_Profession).length == 0) a.push(b);
          return a;
        }, []);
        // console.log(this.Professionfilter.ProfessionList );
        // this.institution = (response as any).data;
        this.Institutionfilter.InstitutionList = master.map(x => {
          return { selected: false, reg_Institution: x.reg_Institution }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Institution == b.reg_Institution).length == 0) a.push(b);
          return a;
        }, []);

        this.Departmentfilter.DeparmentList = master.map(x => {
          return { selected: false, reg_Department: x.reg_Department }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Department == b.reg_Department).length == 0) a.push(b);
          return a;
        }, []);
        this.Purposefilter.PurposeList = master.map(x => {
          return { selected: false, reg_Purpose: x.reg_Purpose }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Purpose == b.reg_Purpose).length == 0) a.push(b);
          return a;
        }, []);
        this.Placefilter.PlaceList = master.map(x => {
          return { selected: false, reg_Place: x.reg_Place }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Place == b.reg_Place).length == 0) a.push(b);
          return a;
        }, []);
      }
    })
  }
  Adminclick(e) {
    this.Admin = e.target.checked;
    let usertype = "All"
    if (this.User == false && this.Admin == false) {
      usertype = "All";
    }
    else if (this.User == false && this.Admin == true) {
      usertype = "User";
    }
    else if (this.Admin == false) {
      usertype = "Admin";
    }
    else {
      usertype = "All";
    }
    this.load = true;
    this.apiService.getAll('professionalDetail', { usertype: usertype }).subscribe((response) => {
      this.load = false;
      if ((response as any).isSuccess) {
        var master = (response as any).data;
        this.Professionfilter.ProfessionList = master.map(x => {
          return { selected: false, reg_Profession: x.reg_Profession }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Profession == b.reg_Profession).length == 0) a.push(b);
          return a;
        }, []);
        // console.log(this.Professionfilter.ProfessionList );
        // this.institution = (response as any).data;
        this.Institutionfilter.InstitutionList = master.map(x => {
          return { selected: false, reg_Institution: x.reg_Institution }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Institution == b.reg_Institution).length == 0) a.push(b);
          return a;
        }, []);

        this.Departmentfilter.DeparmentList = master.map(x => {
          return { selected: false, reg_Department: x.reg_Department }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Department == b.reg_Department).length == 0) a.push(b);
          return a;
        }, []);
        this.Purposefilter.PurposeList = master.map(x => {
          return { selected: false, reg_Purpose: x.reg_Purpose }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Purpose == b.reg_Purpose).length == 0) a.push(b);
          return a;
        }, []);
        this.Placefilter.PlaceList = master.map(x => {
          return { selected: false, reg_Place: x.reg_Place }
        }).reduce(function (a, b) {
          if (a.length == 0 || a.filter(y => y.reg_Place == b.reg_Place).length == 0) a.push(b);
          return a;
        }, []);
      }
    })
  }
  dismiss() {
    this.route.navigate(['/admin-records']);
  }
  filter() {
    let data = {
      profession: this.filterForm.value.profession,
      institution: this.filterForm.value.institution,
      department: this.filterForm.value.department,
      purpose: this.filterForm.value.purpose,
      place: this.filterForm.value.place
    }
    let user = "All";
    if ((this.User == undefined && this.Admin == undefined) || (this.User == false && this.Admin == false)) {
      user = "All";
    }
    else if (this.User == false) {
      user = "User";
    }
    else if (this.Admin == false) {
      user = "Admin";
    }
    this.apiService.getAll('filter', { filterdata: JSON.stringify(data), UserType: user }).subscribe((response) => {
      if ((response as any).isSuccess) {
        let data = (response as any).data;
        if (data.length != 0) {
          this.route.navigate(['/admin-records'], { queryParams: { filterdata: JSON.stringify(data), resultCount: data.length } });
        }
      }
    })
  }


}