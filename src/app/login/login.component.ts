import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactUrl="https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts";

  isLoginMode = true;
  isLoading = false;
  error: string | undefined ;
contactData:any;
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
) {}


    ngOnInit() {
      
    }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(form.value);
    }
  }

}
