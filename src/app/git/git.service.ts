import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment'
@Injectable()
export class GitService {

  private username: string = "SamNgigi";
  private clientId: string = "4d70422b5fdbbdac483b"
  private apiUrl: string = "https://api.github.com/users/";
  private clientSecret:string = environment.GitSecret;
  gitProfile(){
    return this.http.get(this.apiUrl + this.username+"?client_id="+this.clientId+"&client_service"+this.clientSecret).map(result => result)
  }

  constructor(private http: HttpClient) {
    console.log("GitService Ready");
  }



}
