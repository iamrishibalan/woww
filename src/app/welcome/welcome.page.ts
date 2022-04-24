import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
UserDetails:any;
  constructor(private route: Router) {
    localStorage.removeItem('ExitApp');

   }

  ngOnInit() {
    this.UserDetails=JSON.parse(localStorage.getItem('UserDetail'));
  }
  UpdateProfile(){
    this.route.navigate(['/myprofile']);
  }
}
