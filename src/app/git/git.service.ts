import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {

  private username:string;
  private apiUrl:string = "https://api.github.com/users/"

  constructor(private http:HttpClient) {
      console.log("GitService Ready");
      this.username ="SamNgigi"
   }

  gitProfile(){
    return this.http.get(this.apiUrl+this.username).map(result => result)
  }

}
