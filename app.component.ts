import { Component, OnInit } from '@angular/core';

import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  hospitalData = null;

  constructor(private api:ApiService) {}
  
  title = 'My hospital SEARCH';   

  
ngOnInit() {

  this.api.getHospitals().subscribe((data)=>{

  this.hospitalData = data;
    
});
}

}