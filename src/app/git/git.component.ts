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

  constructor(private gitService:GitService) { }

  ngOnInit() {

  

  }

}
