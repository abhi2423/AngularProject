import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDialogModule} from '@angular/material/dialog';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { HeaderComponent } from './header/header.component';
import { UserListService } from './contact-list/user-list.service';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    ContactListComponent,
    CompanydetailsComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule

  ],
  exports: [
    MatFormFieldModule,
  ],
  providers: [AuthService,UserListService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
