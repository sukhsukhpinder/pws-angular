import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
    var url =environment.baseUrl+environment.environmentId+"/as/authorize?response_type=code&client_id="+environment.clientId+"&redirect_uri="+environment.redirectUri+"&scope="+environment.scope;
    window.location.replace(url);
    //window.location.href="https://auth.pingone.asia/30168365-9897-4b5b-a112-01b97ebe170b/as/authorize?response_type=code&client_id=1ee458aa-75b4-43dd-9661-5091122387d0&redirect_uri=https://localhost:5001&scope=openid%20profile%20p1:read:user";
  }

  ngOnInit(): void {
  }

}
