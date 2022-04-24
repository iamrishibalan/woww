import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicModule, NavController, LoadingController, ToastController, MenuController } from '@ionic/angular';
import { AppService } from '../shared/api-services/app.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  providers: [AppService]
})
export class ForgotPasswordPage implements OnInit {
  forgotpassForm: FormGroup;
  isSubmitted: boolean = false;
  Invalidemail: boolean = false;

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, private route: Router,
    public loaderCtrl: LoadingController, private toastCtrl: ToastController, public apiService: AppService) {
      localStorage.removeItem('ExitApp');

     }

  ngOnInit() {
    this.forgotpassForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

  }

  doSignup() {
    this.isSubmitted = true;
    this.Invalidemail = false;
    if (this.forgotpassForm.valid) {
      this.apiService.getAll('ForgotEmailOtp', { Email: JSON.stringify(this.forgotpassForm.value) }).subscribe((response) => {
        if ((response as any).isSuccess) {
          let data = (response as any).data[0];
          let Otp = (response as any).Otp;
          let values = {
            otp: Otp,
            email: data.reg_Email
          }
          sessionStorage.setItem('Otp', JSON.stringify(values));
          sessionStorage.removeItem("Signin");
          this.route.navigate(['/forgotpassword-otp']);
        }
        else {
          this.Invalidemail = true;
        }
      })
    }
   
  }
  clear(){
    this.Invalidemail = false;
  }
  Send() {

    this.route.navigate(['/forgotpassword-otp']);
  }
  Close() {
    this.route.navigate(['/register']);
  }


}
