import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController,ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/Rx';
import { UserPage } from '../user/user.page';

import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../shared/api-services/app.service'
let base;
@Component({
  selector: 'app-createwebinar',
  templateUrl: './createwebinar.page.html',
  styleUrls: ['./createwebinar.page.scss'],
  providers: [AppService]
})
export class CreatewebinarPage implements OnInit {
  isSubmitted: boolean = false;
  webinarForm: FormGroup;
  userDetail: any;
  confirm: boolean = true;
  success: boolean = false;
  UpdateSussess:boolean=false;
  webinarType:any;
  width: any = 0;
  constructor(public menuCtrl: MenuController, private route: Router, public apiService: AppService,public modalController: ModalController) {
    this.menuCtrl.enable(false, 'myMenu');
    this.userDetail = JSON.parse(localStorage.getItem('UserDetail'));
    localStorage.removeItem('ExitApp');

    base = this;
  }

  runProgressBar() {
    Observable.timer(0, 100)
      .takeWhile(() =>
        this.isWidthWithinLimit()
      )
      .subscribe(() => {
        this.width = this.width + 5;
        this.confirm=false;
        if(this.width == 60)
        {
          this.UpdateSussess=true;
          this.success=false;
          
        }
        if (this.width == 100) {
          this.route.navigate(['/mywebinar']);
        }
      })

  }
  isWidthWithinLimit() {
    if (this.width === 100) {
      return false;
    } else {
      return true;
    }
  }
  binddata(e) {
    this.webinarForm.patchValue({
      Name: e.reg_Name,
      Email: e.reg_Email,
      Designation: e.reg_Profession,
      IGPSC: e.reg_Institution,
      IT: e.reg_Department
    })
    this.webinarForm.controls['Name'].disable();
    this.webinarForm.controls['Email'].disable();
    this.webinarForm.controls['Designation'].disable();
    this.webinarForm.controls['IGPSC'].disable();
    this.webinarForm.controls['IT'].disable();
  }
  ngOnInit() {
    this.webinarForm = new FormGroup({
      webinartitle: new FormControl('', [Validators.required]),
      Choosedate: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Designation: new FormControl('', [Validators.required]),
      IGPSC: new FormControl('', [Validators.required]),
      IT: new FormControl('', [Validators.required]),
    }
    );
    this.apiService.create('getProfileDetail', { Id: JSON.stringify(this.userDetail.reg_Id) }).subscribe((response) => {
      if ((response as any).isSuccess) {
        let value = (response as any).data[0];
        this.binddata(value);
      }
    })
    var body = document.body;
    body.classList.add("webinar");

  }
  Edit() {
    this.webinarForm.controls['Name'].enable();
    this.webinarForm.controls['Email'].enable();
    this.webinarForm.controls['Designation'].enable();
    this.webinarForm.controls['IGPSC'].enable();
    this.webinarForm.controls['IT'].enable();
  }
  Reset() {
    if (this.webinarForm.value.Name != undefined && this.webinarForm.value.Name != '') {
      this.webinarForm.patchValue({
        webinartitle: "",
        Choosedate: "",
        Name: "",
        Email: "",
        Designation: "",
        IGPSC: "",
        IT: "",
      });
    }
    else {
      this.webinarForm.patchValue({
        webinartitle: "",
        Choosedate: "",
      });
    }
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
  Onsubmit() {
    this.doSignup();
  
  }
  doSignup() {
    this.isSubmitted = true;
   this.confirm = true;
    if (this.webinarForm.valid) {
      this.webinarForm.controls['Name'].enable();
      this.webinarForm.controls['Email'].enable();
      this.webinarForm.controls['Designation'].enable();
      this.webinarForm.controls['IGPSC'].enable();
      this.webinarForm.controls['IT'].enable();
      if(this.webinarForm.value.Email==this.userDetail.reg_Email)
      {
        this.webinarType='RegisterUser'
      }
      else{
        this.webinarType='GuestUser'
      }
      let data = {
        webinarTitle: this.webinarForm.value.webinartitle,
        Date: this.webinarForm.value.Choosedate,
        Name: this.webinarForm.value.Name,
        Email: this.webinarForm.value.Email,
        Designation: this.webinarForm.value.Designation,
        Igpsc: this.webinarForm.value.IGPSC,
        IT: this.webinarForm.value.IT,
        UserId: this.userDetail.reg_Id,
        webinarType:this.webinarType
      }
      this.webinarForm.controls['Name'].disable();
      this.webinarForm.controls['Email'].disable();
      this.webinarForm.controls['Designation'].disable();
      this.webinarForm.controls['IGPSC'].disable();
      this.webinarForm.controls['IT'].disable();
      this.apiService.create('createWebinar', { newWebinar: JSON.stringify(data) }).subscribe((response) => {
        if ((response as any).isSuccess) {
          let data = (response as any).data[0];
          let webcount = (response as any).webcount[0];
          let Logintype = (response as any).UserType;
          this.success = true;
          sessionStorage.setItem('mywebinar', JSON.stringify(data));
          if (webcount.result == 0) {
           
            this.route.navigate(['/introduction'], { queryParams: { WebinarId: data.webinar_Id,Webinartype:data.webinar_Type} });
          }
          else {
            this.runProgressBar();
            // this.route.navigate(['/mywebinar']);
          }
        }
      })

    }
  }
}
