import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  companyUrl="https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies";
  companyData:any;
  constructor(private http: HttpClient
    ) { 
  }
  ngOnInit(): void {
    this.fetchcompanyData();
  }


  fetchcompanyData(){
    this.http.get<Company[]>(this.companyUrl).subscribe(data => {
      this.companyData=data;
    })
  
  }
}

interface Company{
  id: number,
  name: string,
    logo: any,
    description: string
}