import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelpPage } from '../help/help.page';
import { AppService } from '../shared/api-services/app.service'
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../apiservice/loading.services';
import { AdminPage } from '../admin/admin.page';
import { UserPage } from '../user/user.page';

let base;

@Component({
  selector: 'app-personal-detaills',
  templateUrl: './personal-detaills.page.html',
  styleUrls: ['./personal-detaills.page.scss'],
  providers: [AppService]

})
export class PersonalDetaillsPage implements OnInit {

  public load = false;
  firstpassword: boolean = false;
  confirmpassword: boolean = false;
  newpassword: boolean = false;
  isSubmitted: boolean = false;
  isSubmitted1: boolean = false;
  HideDetail: boolean = false;
  EmailExit: boolean = false;
  MustMatch: boolean = false;
  webinarForm: FormGroup;
  Information: FormGroup;
  userDetail: any;
  key1: boolean = true;
  key2: boolean = false;
  key3: boolean = false;
  key11: boolean = true;
  key22: boolean = false;
  key33: boolean = false;
  constructor(private route: Router,public loading: LoadingService, public modalController: ModalController, public apiService: AppService) {
    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));
    base = this;
    localStorage.removeItem('ExitApp');

  }

  ngOnInit() {
    this.load = true;
    this.apiService.create('getProfileDetail', { Id: JSON.stringify(this.userDetail.reg_Id) }).subscribe((response) => {
      this.load = false;
      if ((response as any).isSuccess) {
        let value = (response as any).data[0];
        this.binddata(value);
      }
    })
    this.webinarForm = new FormGroup({
      reg_Email: new FormControl('', [Validators.required]),
      reg_Password: new FormControl('', [Validators.required]),
      Newpassword: new FormControl('', [Validators.required]),
      reg_Confirmpassword: new FormControl('', [Validators.required])
    });
    this.Information = new FormGroup({
      reg_Profession: new FormControl('', [Validators.required]),
      reg_Institution: new FormControl('', [Validators.required]),
      reg_Department: new FormControl('', [Validators.required]),
      reg_Purpose: new FormControl('', [Validators.required]),
      reg_Place: new FormControl('', [Validators.required])
    });
   
  }
  binddata(e) {
    this.HideDetail = false;
    this.webinarForm.patchValue({
      reg_Email: e.reg_Email,
      reg_Password: e.reg_Password
    });
    this.Information.patchValue({
      reg_Profession: e.reg_Profession,
      reg_Institution: e.reg_Institution,
      reg_Department: e.reg_Department,
      reg_Purpose: e.reg_Purpose,
      reg_Place: e.reg_Place
    });
    this.webinarForm.controls['reg_Email'].disable();
    this.webinarForm.controls['reg_Password'].disable();
    this.Information.controls['reg_Profession'].disable();
    this.Information.controls['reg_Institution'].disable();
    this.Information.controls['reg_Department'].disable();
    this.Information.controls['reg_Purpose'].disable();
    this.Information.controls['reg_Place'].disable();
  }
  binddata1(e) {
    this.HideDetail = false;
    this.webinarForm.patchValue({
      reg_Email: e.reg_Email,
      reg_Password: e.reg_Password
    });
    this.Information.patchValue({
      reg_Profession: e.reg_Profession,
      reg_Institution: e.reg_Institution,
      reg_Department: e.reg_Department,
      reg_Purpose: e.reg_Purpose,
      reg_Place: e.reg_Place
    });
    this.webinarForm.controls['reg_Email'].disable();
    this.webinarForm.controls['reg_Password'].disable();
    this.Information.controls['reg_Profession'].disable();
    this.Information.controls['reg_Institution'].disable();
    this.Information.controls['reg_Department'].disable();
    this.Information.controls['reg_Purpose'].disable();
    this.Information.controls['reg_Place'].disable();
    this.ngOnInit()
  }
  submit() {
    this.doSignup();
    this.Informations();
    
  }
  submit1() {
    this.Informations();
    this.doSignup();
  }
  async Update() {
    this.route.navigate(['/admin-webinar']);
    const Admin = await this.modalController.create({
      component: AdminPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }
  async User()
  {
    //this.route.navigate(['/admin-webinar']);
    const Admin = await this.modalController.create({
      component: UserPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }
  doSignup() {
    this.isSubmitted = true;
    this.MustMatch = false;
    this.firstpassword = false;
    if (this.webinarForm.valid) {
      if (this.webinarForm.value.Newpassword == this.webinarForm.value.reg_Confirmpassword) {
        let data = {
          reg_Email: this.webinarForm.value.reg_Email,
          reg_Password: this.webinarForm.value.Newpassword,
          reg_Confirmpassword: this.webinarForm.value.reg_Confirmpassword,
          reg_Id: this.userDetail.reg_Id
        }
        this.load = true;
        this.apiService.create('UpdateProfileDetail1', { datas: JSON.stringify(data) }).subscribe((response) => {
          this.load = false;
           if ((response as any).isSuccess) {
            let value = (response as any).data[0];
            this.EmailExit = false;
            this.binddata1(value);
          }
          else {
            let value = (response as any).data;
            if (value == 'Email Already Exist') {
              this.EmailExit = true;
            }
          }
        })
      }
      else {
        this.MustMatch = true;
      }
    }

    if (this.webinarForm.value.Newpassword != this.webinarForm.value.reg_Confirmpassword) {
      this.MustMatch = true;
    }
  }
  Informations() {
    this.isSubmitted1 = true;
    if (this.Information.valid) {
      let data = {
        reg_Profession: this.Information.value.reg_Profession,
        reg_Institution: this.Information.value.reg_Institution,
        reg_Department: this.Information.value.reg_Department,
        reg_Purpose: this.Information.value.reg_Purpose,
        reg_Place: this.Information.value.reg_Place,
        reg_Id: this.userDetail.reg_Id
      }
    
       
      this.load = true;
      this.apiService.create('UpdateProfileDetail2', { datas: JSON.stringify(data) }).subscribe((response) => {
        this.load = false;
         if ((response as any).isSuccess) {
          let value = (response as any).data[0];
          this.binddata(value);
        }
      })
    }
  }
  edit() {
    this.HideDetail = true;
    this.firstpassword = true;
    this.webinarForm.controls['reg_Email'].enable();
    this.webinarForm.controls['reg_Password'].enable();
    this.Information.controls['reg_Profession'].enable();
    this.Information.controls['reg_Institution'].enable();
    this.Information.controls['reg_Department'].enable();
    this.Information.controls['reg_Purpose'].enable();
    this.Information.controls['reg_Place'].enable();
  }
  async presentModal() {
    const help = await this.modalController.create({
      component: HelpPage,
      cssClass: 'my-custom-class'
    });
    return await help.present();
  }

  collapse() {
    this.route.navigate(['/wheel-intro']);
  }

  Webinarselect() {
    this.route.navigate(['/webinarselect']);
  }


  passwordvalidation(e) {
    this.firstpassword = true;
  }
  newpasswordvalidation(e) {
    this.newpassword = true;
    if (e != '' && e != undefined) {
      let vallength = e.length;
      if (vallength >= 5) {
        this.key1 = false;
        this.key2 = false;
        this.key3 = true;
      }
      else {
        this.key1 = false;
        this.key2 = true;
        this.key3 = false;
      }
    }
  }
  conpasswordvalidation(e) {
    this.confirmpassword = true;

    this.key11 = true;
    this.key22 = false;
    this.key33 = false;
    if (this.webinarForm.value.Newpassword != e) {
      this.key11 = false;
      this.key22 = true;
      this.key33 = false;
    }
    else {
      this.key11 = false;
      this.key22 = false;
      this.key33 = true;


    }
    if (e >= '1') {
      this.MustMatch = false;
    }
  }

}
