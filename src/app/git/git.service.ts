import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {

  private username: string;
  // private clientId: string = "4d70422b5fdbbdac483b"
  private apiUrl: string = "https://api.github.com/users/";
  private clientSecret: string = environment.Git_Secret;
//Git profiles
  gitProfile(){
    return this.http.get(this.apiUrl + this.username+"?clientSecret="+this.clientSecret).map(result => result)
  }

  //Git Repos
  gitRepos(){
    return this.http.get(this.apiUrl + this.username+"/repos"+"?clientSecret="+this.clientSecret).map(result => result)
  }

  constructor(private http: HttpClient) {
    console.log("GitService Ready");
    this.username = "SamNgigi"
  }



}
