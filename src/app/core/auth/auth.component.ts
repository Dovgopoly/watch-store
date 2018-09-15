import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email: string;
  password: string;
  is_login: boolean;

  ngOnInit() {

    // console.log(this.authService.authenticated);

  }

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    ) {
    this.is_login = route.snapshot.data['is_login'];
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}
