import {Component, OnInit} from '@angular/core';

import { ReposService } from './repos.service';

@Component({
  templateUrl: './repos.component.html',
  styleUrls: ['/repos.css']
})
export class ReposComponent implements OnInit {

  repos: any;
  constructor( private reposService: ReposService) {}

  getRepos(): void {
    this.reposService.getRepos().subscribe(res => {
      this.repos = res;
    });
  }
  ngOnInit(): void {
    this.getRepos();
  }
}

