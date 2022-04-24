
import { Component, OnInit, HostListener, NgModule} from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController, ToastController, MenuController } from '@ionic/angular';
import { AppService } from '../shared/api-services/app.service'
import { LoginService } from '../login.service'
import { LoadingService } from '../apiservice/loading.services';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var $: any;
let base;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [AppService]
})

export class RegisterPage implements OnInit {
  public load = false;



  isLoading = false;
  isLoggedin: boolean = null;
  segment: any;
  todo = {};
  isSubmitted: boolean = false;
  signinSubmitted: boolean = false;
  activepassword: boolean = false;
  passwordcheck: boolean = false;
  activepassord: boolean = false;
  registerForm: FormGroup;
  signinForm: FormGroup;
  key2: boolean = false;
  key1: boolean = true;
  key3: boolean = false;
  key11: boolean = true;
  key22: boolean = false;
  key33: boolean = false;
  InvalidEmail: boolean = false;
  viewpassword: boolean = false;
  toast: Promise<HTMLIonToastElement>;
  InvalidUserNameorpass: boolean = false;
  TotalWebinar: any = 0;
  SignInDatas: any;
  @HostListener('window:keyup', ['$event']) keyUp(e: KeyboardEvent) {

    this.InvalidEmail = false;
    this.InvalidUserNameorpass = false;
  }
  constructor(public menuCtrl: MenuController, public googlePlus: GooglePlus, public navCtrl: NavController, private route: Router,
    public apiService: AppService, private toastCtrl: ToastController, private globalTransfer: LoginService,
    public loading: LoadingService) {
    localStorage.removeItem('ExitApp');
    base = this;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false)
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
    this.registerForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
    this.signinForm = new FormGroup({
      emailid: new FormControl('', [Validators.required, Validators.email]),
      signinPassword: new FormControl('', [Validators.required])
    });
    var signins = localStorage.getItem("Signin");
    if (signins == 'signin') {
      this.segment = 'signin';
    }
    else {
      this.segment = 'regidter';
    }
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  logForm() {
    console.log(this.todo)
  }
  goforgotpassword() {
    this.route.navigate(['/forgot-password']);
    sessionStorage.removeItem("Signin");
  }
  Register() {
    this.route.navigate(['/welcome']);
    sessionStorage.removeItem("Signin");
  }
  googlelogin(): void {
    this.googlePlus.login({
      'webClientId': '173936240660-05pl7bojpuugnoc30a3a34nd2ubf1blr.apps.googleusercontent.com',
      'offline': true
    }).then(res => alert(JSON.stringify(res)))
      .catch(err => alert(JSON.stringify(err)));
  }

  // googlelogin() {
  //   this.googlePlus.login({})
  //     .then(res => alert(JSON.stringify(res)))
  //     .catch(err => alert(JSON.stringify(err)));
  // }

  SignIn() {
    
    this.signinSubmitted = true;
    
    sessionStorage.removeItem("Signin");
    if (this.signinForm.valid) {
      let data = {
        Email: this.signinForm.value.emailid,
        Signinpassword: this.signinForm.value.signinPassword
      }
      // base.loading.present();  
      this.load = true;   
      this.apiService.create('SinIn', { SignIndata: JSON.stringify(data) }).subscribe(async (response) => {
        // base.loading.dismiss();   
        this.load = false;    
        if ((response as any).isSuccess) {
          this.load = false;
          this.SignInDatas = (response as any).data;
          this.TotalWebinar = this.SignInDatas.WebCount;
          if (this.SignInDatas != '') {
            base.loading.dismiss();
            this.globalTransfer.publishSomeData({ UserType: this.SignInDatas.reg_UserType, WebinarCount: this.TotalWebinar });
            localStorage.setItem("UserDetail", JSON.stringify(this.SignInDatas));
            localStorage.setItem('isFirst', '1');
            if (this.SignInDatas.reg_UserType == 'Admin') {
              if (this.SignInDatas.reg_FirstLogin == '1') {
                // base.loading.dismiss();
                this.presentToast("SignIn successfully");
                this.load = false;   
                this.route.navigate(['/mywebinar']);
                
              }
              else {
                // base.loading.dismiss();
                this.load = false;   
                this.route.navigate(['/admin-welcome']);
              }
            }
            else if(this.SignInDatas.reg_UserType == 'User') {
              // base.loading.dismiss();
              this.load = false;   
              if (this.SignInDatas.reg_FirstLogin == '1') {
                this.route.navigate(['/mywebinar']);
              }
              else {
                // base.loading.dismiss();
                this.load = false;   
                this.route.navigate(['/welcome']);
              }
            }
          }
          else {
            // base.loading.dismiss();
          }
        }
        else {
          // base.loading.dismiss();
          this.load = false;   
          this.InvalidUserNameorpass = true;
        }
      })
    }
  }

  async doSignup() {
    // $('#myForm')[0].reset();
    this.isSubmitted = true;
    this.registerForm.value;
    if (this.registerForm.value.password != undefined && this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this.passwordcheck = true;
    }
    else{
       
      if (this.registerForm.valid) {
        let data = {
          Name: this.registerForm.value.Name,
          Email: this.registerForm.value.emailId,
          Signinpassword: this.registerForm.value.password,
          cpass: this.registerForm.value.confirmPassword
        }
        // base.loading.present();
        this.load = true;
         
        this.apiService.getAll('register', { Registerdata: JSON.stringify(data) }).subscribe((response) => {
          this.load = false;
          // base.loading.dismiss();
          if ((response as any).isSuccess) {
            let data = (response as any).data;
            if (data == "Create Successfull") {
              this.presentToast("Created successfully");
              // this.segment = 'signin';  
              // this.registerForm.reset()
              let datas = {
                Email: this.registerForm.value.emailId,
                Signinpassword: this.registerForm.value.password,
              }
              setTimeout(()=>{
                this.load = true;
                this.apiService.create('SinIn', { SignIndata: JSON.stringify(datas) }).subscribe(async (response) => {
                  this.load = false;
                  // base.loading.dismiss();   
                  this.load = false;    
                  if ((response as any).isSuccess) {
                    this.load = false;
                    this.SignInDatas = (response as any).data;
                    this.TotalWebinar = this.SignInDatas.WebCount;
                    if (this.SignInDatas != '') {
                      base.loading.dismiss();
                      this.globalTransfer.publishSomeData({ UserType: this.SignInDatas.reg_UserType, WebinarCount: this.TotalWebinar });
                      localStorage.setItem("UserDetail", JSON.stringify(this.SignInDatas));
                      localStorage.setItem('isFirst', '1');
                      if (this.SignInDatas.reg_UserType == 'Admin') {
                        if (this.SignInDatas.reg_FirstLogin == '1') {
                          // base.loading.dismiss();
                          this.load = false;   
                          this.route.navigate(['/admin-webinar']);
                        }
                        else {
                          // base.loading.dismiss();
                          this.load = false;   
                          this.route.navigate(['/admin-welcome']);
                        }
                      }
                      else if(this.SignInDatas.reg_UserType == 'User') {
                        // base.loading.dismiss();
                        this.load = false;   
                        if (this.SignInDatas.reg_FirstLogin == '1') {
                          this.route.navigate(['/createwebinar']);
                        }
                        else {
                          // base.loading.dismiss();
                          this.load = false;   
                          this.route.navigate(['/welcome']);
                        }
                      }
                    }
                    else {
                      // base.loading.dismiss();
                    }
                  }
                  else {
                    // base.loading.dismiss();
                    this.load = false;   
                    this.InvalidUserNameorpass = true;
                  }
                })
              },1000)
            
             
            }
            else {
              this.presentToast(" Email is already exist...");
              this.InvalidEmail = true;
            }
          }
          else {
            this.presentToast("Email is already exist...");
            this.InvalidEmail = true;
            // this.loading.dismiss()
          }
        })
       
      }
    }
  
  
  }

  passwordValidation(e) {
    this.activepassord = true;
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
    this.activepassword = true;
    this.key11 = true;
    this.key22 = false;
    this.key33 = false;
    if (this.registerForm.value.password != e) {
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
      this.passwordcheck = false;
    }
  }
}
