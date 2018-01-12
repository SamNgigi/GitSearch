import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitService } from '../git/git.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
users:any = [];
repos:any = [];

  constructor(private gitService:GitService) { }

  ngOnInit() {
    this.gitService.gitProfile()
      .subscribe(res => {
        //console.log(res)
        this.users = res;
      })

      this.gitService.gitRepos()
        .subscribe(data => {
          //console.log(res)
          this.users = data;
        })
  }

}
