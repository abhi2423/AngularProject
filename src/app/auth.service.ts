import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  userDataDetails:any;
  userURLs="https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users";
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  
  constructor(
    private router: Router,
    private http:HttpClient
  ) {}

  userData():userDetails{
    this.http.get<userDetails[]>(this.userURLs).subscribe((data: any) => {
      this.userDataDetails=data;
    })
    return this.userDataDetails;
  }
  
  login(user: User) {
    this.userData();
    let data=this.userDataDetails;
  
   if(data.find(element => element.email===user.email &&  user.password === 'encoraSampleProject@123')){
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


interface userDetails{
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  companyId: number
}