import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success("Registrierung erfolgreich");
      console.log('Registrierung erfolgreich');
      this.router.navigate(['/home']);
    }, error => {
      this.alertify.error("Registrierung fehlgeschlagen");
      console.log(error);
    });
  }

}
