import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any = false;
  constructor(private AuthenticationService: AuthenticationService) {
   
}

  ngOnInit() {
   this.isLoggedIn = this.AuthenticationService.isLogedIn();
   console.log("header comp",this.isLoggedIn);
  }

}
