import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController ,LoadingController} from '@ionic/angular';
import { AdminPage } from '../admin/admin.page';
import { Observable } from 'rxjs/Rx';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import{AppService} from '../shared/api-services/app.service'
let base;

@Component({
  selector: 'app-admin-webinar',
  templateUrl: './admin-webinar.page.html',
  styleUrls: ['./admin-webinar.page.scss'],
  providers:[AppService]
})
export class AdminWebinarPage implements OnInit {

  public load = false;
  isSubmitted: boolean = false;
  webinarForm: FormGroup;
  userDetail: any;
  confirm: boolean = true;
  success: boolean = false;
  UpdateSussess:boolean=false;
  public loading: any;
  width: any = 0;
  constructor(public menuCtrl: MenuController,  public loaderCtrl: LoadingController,private route: Router, public modalController: ModalController,public apiService: AppService) {
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
          this.success=false
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
  ngOnInit() {
    this.webinarForm = new FormGroup({
      webinartitle: new FormControl('', [Validators.required]),
      Choosedate: new FormControl('', [Validators.required]),
      Name: new FormControl(this.userDetail.reg_Name, [Validators.required]),
      Email: new FormControl(this.userDetail.reg_Email, [Validators.required]),
      Designation: new FormControl(this.userDetail.reg_Profession, [Validators.required]),
      IGPSC: new FormControl(this.userDetail.reg_Institution, [Validators.required]),
      IT: new FormControl(this.userDetail.reg_Institution, [Validators.required]),
    }
    );
  var body = document.body;
  body.classList.add("webinar");
  this.webinarForm.controls['Name'].disable();
  this.webinarForm.controls['Email'].disable();
  this.webinarForm.controls['Designation'].disable();
  this.webinarForm.controls['IGPSC'].disable();
  this.webinarForm.controls['IT'].disable();
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
  Onsubmit() {
    this.doSignup();
  }
  records(){
     this.route.navigate(['/admin-records']);
  }
  async Update() {
    this.route.navigate(['/admin-webinar']);
    const Admin = await this.modalController.create({
      component: AdminPage,
      cssClass: 'my-User'
    });
    return await Admin.present();
  }
 async doSignup() {
    
   this.load = true;
    this.isSubmitted = true;
    if (this.webinarForm.valid) {
      this.webinarForm.controls['Name'].enable();
      this.webinarForm.controls['Email'].enable();
      this.webinarForm.controls['Designation'].enable();
      this.webinarForm.controls['IGPSC'].enable();
      this.webinarForm.controls['IT'].enable();
      let data = {
        webinarTitle: this.webinarForm.value.webinartitle,
        Date: this.webinarForm.value.Choosedate,
        Name: this.webinarForm.value.Name,
        Email: this.webinarForm.value.Email,
        Designation: this.webinarForm.value.Designation,
        Igpsc: this.webinarForm.value.IGPSC,
        IT: this.webinarForm.value.IT,
        UserId: this.userDetail.reg_Id
      }
      // this.webinarForm.controls['Name'].disable();
      // this.webinarForm.controls['Email'].disable();
      // this.webinarForm.controls['Designation'].disable();
      // this.webinarForm.controls['IGPSC'].disable();
      // this.webinarForm.controls['IT'].disable();

      setTimeout(()=>{
         
        this.apiService.create('createWebinar', { newWebinar: JSON.stringify(data) }).subscribe((response) => {
          if ((response as any).isSuccess) {
            let data = (response as any).data[0];
            let webcount = (response as any).webcount[0];
            let Logintype = (response as any).UserType;
            this.success = true;
            this.load = false;
            sessionStorage.setItem('mywebinar', JSON.stringify(data));
            if (webcount.result == 0) {
              this.runProgressBar();
              // this.route.navigate(['/introduction'],{queryParams:{UserId:data.webinar_Id,type:Logintype}});
            }
            else {
              this.load = true;
              // this.runProgressBar();
              this.route.navigate(['/mywebinar'],{queryParams:{UserId :  this.userDetail.reg_Id }});
              this.load = false
            // }
          }
        }
        })
      },1000)
     

    }
  }
}

