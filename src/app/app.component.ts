import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitService } from './git/git.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private gitService: GitService) {}

  ngOnInit() {
    this.gitService.gitProfile()
      .subscribe(res => {
        console.log(res)
      })
  }

}
