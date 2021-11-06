import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { findIndex } from 'lodash';
import { Contacts } from './user-list';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  contactUrl="https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts";

  contactData:any;
  constructor(private http: HttpClient) { }

  userData():Contacts{
    this.http.get<Contacts[]>(this.contactUrl).subscribe((data: any) => {
      this.contactData=data;
    })
    return this.contactData;
  }

  addUser(user: Contacts) {
    this.contactData.push(user);
  }

  updateUser(user: Contacts) {
    let index = findIndex(this.contactData, (p: Contacts) => {
      return p.id === user.id;
    });
    this.contactData[index] = user;
  }
}
