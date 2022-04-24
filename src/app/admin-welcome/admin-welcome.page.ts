import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.page.html',
  styleUrls: ['./admin-welcome.page.scss'],
})
export class AdminWelcomePage implements OnInit {
  UserDetail: any;

  constructor(private route: Router) { 
    localStorage.removeItem('ExitApp');

  }

  ngOnInit() {
    this.UserDetail=JSON.parse(localStorage.getItem('UserDetail'));
  }
  UpdateProfile(){
    this.route.navigate(['/admin-profile']);
  }
}
