import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface User{
  email:string;
  password:string;
  }

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  
  constructor(
    private router: Router
  ) {}

  login(user: User) {
    if (user.email !== '' && user.password === 'encoraSampleProject@123' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
    else{
      alert("invalid credential");
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}