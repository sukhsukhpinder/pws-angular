import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  environmentId: string;
  flowId: string;
  username: string;
  password: string;
  constructor(private paramRoute: ActivatedRoute, public http: HttpClient,private router:Router) { 
  }

  ngOnInit(): void {
    this.paramRoute.queryParams.subscribe(params => {
      this.environmentId = params['environmentId'];
      this.flowId = params['flowId'];
    });
  }

  response: any;
  authenticate() {
    debugger
    var url =environment.apiUrl+ "api/user/post/" + this.username + "/" + this.password+"/"+this.flowId;

    this.http.get(url).subscribe(
      data => {
        debugger
        this.response=data;
        if(this.response.status=="COMPLETED"){
          //window.location.replace(this.response.resumeUrl);
          this.router.navigateByUrl('/test');
        }
      }
    );
  }

  resume(){
    var header=new HttpHeaders().set("Cookie",this.response.session.id);
    this.http.get(this.response.resumeUrl,{headers:header}).subscribe(
      data=>{
        debugger
      }
    );
  }
}
