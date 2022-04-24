import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicModule, NavController, LoadingController, ToastController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-forgotpassword-otp',
  templateUrl: './forgotpassword-otp.page.html',
  styleUrls: ['./forgotpassword-otp.page.scss'],
})
export class ForgotpasswordOtpPage implements OnInit {
  forgototpForm: FormGroup;
  isSubmitted: boolean = false;
  wrongOtp: boolean = false;
  otpvalue: any;
  constructor(public menuCtrl: MenuController, public navCtrl: NavController, private route: Router,
    public loaderCtrl: LoadingController, private toastCtrl: ToastController) {

     }

  ngOnInit() {
    this.forgototpForm = new FormGroup({
    number: new FormControl('', [Validators.required]),
    });
    this.otpvalue=JSON.parse(sessionStorage.getItem('Otp'));
  }
  doSignup(){
    this.isSubmitted=true;
    if(this.forgototpForm.valid)
    {
      if(this.forgototpForm.value.number==this.otpvalue.otp)
      {
        this.route.navigate(['/fp-resetpassword']);
      }
      else{
        this.wrongOtp=true;
      }

    }

  }
  clearr(){
    this.wrongOtp=false;
  }
  Close(){
    this.route.navigate(['/register']);
  }


}
