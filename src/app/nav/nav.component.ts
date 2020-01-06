import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logOut(){
    this.alertify.message('ausgeloggt');
    this.authService.logout();
  }

}
