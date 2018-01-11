import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {

  private username:string;
  private m

  constructor(private http:HttpClient) { }

  gitProfiles(){
    return
  }

}
