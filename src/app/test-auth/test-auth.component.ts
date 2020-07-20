import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-auth',
  templateUrl: './test-auth.component.html',
  styleUrls: ['./test-auth.component.scss']
})
export class TestAuthComponent implements OnInit {

  constructor(public http:HttpClient) {
    
    
   }

  ngOnInit(): void {
    
  }

}
