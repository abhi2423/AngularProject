import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { clone } from 'lodash';
import { Contacts } from './user-list';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  userList: Contacts[]=[];
  user:any={};
  userForm:boolean=false;
  isNewForm:boolean=false;
  newUser:any={};
  editUserForm: boolean = false;
  editedUser: any = {};
  contactData:any;

  @ViewChild('f') addUserForm:NgForm;
  
  constructor(private http: HttpClient,
    private userService:UserListService
    ) { 
  } 
  
  ngOnInit() {
    this.userListData();
  }

userListData(){
  this.contactData=this.userService.userData();
}

  row:any;
  deleteRow(index:number){
    this.row=this.contactData;
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(index,1);
    } 
      this.contactData=this.row;
  } 

  showAddProductForm() {
    if(this.userList.length) {
      this.user = {};
    }
    this.userForm = true;
    this.isNewForm = true;
  }
  saveProduct(user: Contacts) {
    if(this.isNewForm) {
      this.userService.addUser(user);
    } 
    this.userForm = false;
    this.userListData();


  }
  cancelNewProduct() {
    this.newUser = {};
    this.userForm = false;
  }

  showEditProductForm(user: Contacts) {
    if(!user) {
      this.userForm = false;
      return; 
    }
    this.editUserForm = true;
    this.editedUser = clone(user);
  }

  updateUser(editedUser:Contacts) {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
    this.userListData();

  }
  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }
}


