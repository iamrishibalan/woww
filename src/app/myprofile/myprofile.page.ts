import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs/Rx';
import { AppService } from '../shared/api-services\/app.service'
import { LoadingService } from '../apiservice/loading.services';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
  providers: [AppService]
})
export class MyprofilePage implements OnInit {
  isSubmitted: boolean = false;
  profileForm: FormGroup;
  confirm: boolean = true;
  success: boolean = false;
  UpdateSussess:boolean=false;
  userdetail: any;
  width: any = 0;
  constructor(public navCtrl: NavController, private route: Router, public loading: LoadingService, public apiService: AppService) {
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
          this.route.navigate(['/newwebinar']);
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

    this.profileForm = new FormGroup({
      Profession: new FormControl('', [Validators.required]),
      Institution: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required]),
      Purpose: new FormControl('', [Validators.required]),
      Place: new FormControl('', [Validators.required]),


    });
  }
  doSignup() {
    this.isSubmitted = true;
    this.profileForm.value;
    if (this.profileForm.valid) {
      let data = {
        Profession: this.profileForm.value.Profession,
        Institution: this.profileForm.value.Institution,
        Department: this.profileForm.value.Department,
        Purpose: this.profileForm.value.Purpose,
        Place: this.profileForm.value.Place,
        UserId: this.userdetail.reg_Id
      }
      // this.loading.present();
      this.apiService.create('myprofile', { Profiledata: JSON.stringify(data) }).subscribe((response) => {
        // this.loading.dismiss();
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
