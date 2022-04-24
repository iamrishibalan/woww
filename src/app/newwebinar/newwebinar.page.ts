import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newwebinar',
  templateUrl: './newwebinar.page.html',
  styleUrls: ['./newwebinar.page.scss'],
})
export class NewwebinarPage implements OnInit {
userdetails:any;
  constructor(private route: Router) { 
    this.userdetails=JSON.parse(localStorage.getItem("UserDetail"));
    localStorage.removeItem('ExitApp');

  }

  ngOnInit() {
  }
  createwebinar(){
    this.route.navigate(['/createwebinar']);
  }
}
