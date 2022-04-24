import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdminPage } from '../admin/admin.page';
import { FormGroup,Validators,FormControl } from '@angular/forms'
import { AppService  } from '../shared/api-services/app.service';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.page.html',
  styleUrls: ['./admin-profile.page.scss'],
  providers: [AppService]
})
export class AdminProfilePage implements OnInit {
  adminSubmitted: boolean = false;
  adminForm: FormGroup;
  confirm: boolean = true;
  success: boolean = false;
  UpdateSussess:boolean=false;
  userdetail: any;
  width: any = 0;
  constructor(public navCtrl: NavController,private route: Router, public modalController: ModalController,public apiService: AppService) { 
    this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
    localStorage.removeItem('ExitApp');

  }
  runProgressBar() {
    Observable.timer(0, 100)
      .takeWhile(() =>
        this.isWidthWithinLimit()
      )
      .subscribe(() => {
        this.width = this.width + 5;
        if(this.width == 60)
        {
          this.UpdateSussess=true;
          this.success=false
        }
        if (this.width == 100) {
          this.route.navigate(['/admin-webinar']);
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
    this.adminForm = new FormGroup({
      profession: new FormControl('', [Validators.required]),
      institution: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      purpose: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required])
    });
  }
  // async Update() {
  //  this.route.navigate(['/admin-webinar']);
  //   const Admin = await this.modalController.create({
  //     component: AdminPage,
  //     cssClass: 'my-User'
  //   });
  //   return await Admin.present();
  // }


  doSignup(){
    this.adminSubmitted=true;
    if(this.adminForm.valid){
      let data = {
        Profession: this.adminForm.value.profession,
        Institution: this.adminForm.value.institution,
        Department: this.adminForm.value.department,
        Purpose: this.adminForm.value.purpose,
        Place: this.adminForm.value.place,
        UserId: this.userdetail.reg_Id
      }  
      this.apiService.create('admin-profile', { Admindata: JSON.stringify(data) }).subscribe((response) => {
        if ((response as any).isSuccess) {
          let data = (response as any).data[0];
          this.confirm = false;
          this.success = true;
          this.runProgressBar();
        }
      })
    }
  }
}
