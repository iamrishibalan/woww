import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicModule, NavController, LoadingController, ToastController, MenuController } from '@ionic/angular';
import { AppService } from '../shared/api-services/app.service'

@Component({
  selector: 'app-fp-resetpassword',
  templateUrl: './fp-resetpassword.page.html',
  styleUrls: ['./fp-resetpassword.page.scss'],
  providers: [AppService]

})
export class FpResetpasswordPage implements OnInit {
  key2: boolean = false;
  key1: boolean = true;
  key3: boolean = false;
  key11: boolean = true;
  key22: boolean = false;
  key33: boolean = false;
  mustMatch: boolean = false;
  viewconpassword: boolean = false;
  viewpassword: boolean = false;
  resetpasswordForm: FormGroup;
  isSubmitted: boolean = false;
  otpvalue: any;
  constructor(public menuCtrl: MenuController, public navCtrl: NavController, private route: Router,
    public loaderCtrl: LoadingController, private toastCtrl: ToastController,public apiService: AppService) { }

  ngOnInit() {

    this.resetpasswordForm = new FormGroup({
     
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
    }
    );
    this.otpvalue=JSON.parse(sessionStorage.getItem('Otp'));
  }

doSignup(){
  this.isSubmitted =true;
  if(this.resetpasswordForm.valid)
  {
    if (this.resetpasswordForm.value.password == this.resetpasswordForm.value.confirmpassword) {
      let pass=this.resetpasswordForm.value.password;
      this.apiService.getAll('ForgotPassword', { Email: JSON.stringify(this.otpvalue.email),Pass:pass }).subscribe((response) => {
        if ((response as any).isSuccess) {
          let data = (response as any).data;
          localStorage.setItem("Signin", "signin");
          sessionStorage.removeItem("Otp");
          this.route.navigate(['/register']);
        }
      })
    }
    else{
      this.mustMatch = true;
    }
  }
 
}
  Close(){
    this.route.navigate(['']);
  }

  passwordValidation(e) {
    this.viewpassword = true;
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

  confirmpasswordValidation(e) {
    this.viewconpassword = true;
    this.key11 = true;
    this.key22 = false;
    this.key33 = false;
    if (this.resetpasswordForm.value.password != e) {
      this.key11 = false;
      this.key22 = true;
      this.key33 = false;
    }
    else {
      this.key11 = false;
      this.key22 = false;
      this.key33 = true;


    }
  

  }

}
