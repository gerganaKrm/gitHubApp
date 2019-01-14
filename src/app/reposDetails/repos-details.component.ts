import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {saveAs} from 'file-saver';

import {RepoDetailsService} from './repoDetails.service';
@Component({
  templateUrl: './repos-details.component.html'
})
export class ReposDetailsComponent implements OnInit {

  selectedTab: string;
  details: any;
  description: any;
  name: string;
  patch: string;
  fileName: string;
  constructor(private repoDetailsServices: RepoDetailsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.selectedTab = 'info';
    this.name = this.route.snapshot.paramMap.get('name');
    this.repoDetailsServices.getReposDetails(this.name).subscribe(res => {
      this.details = res;
    });
    this.repoDetailsServices.getReposDescription(this.name).subscribe(res => {
      this.description = window.atob(res.content);
    });
  }

  onTabSelected(event): void {
    this.selectedTab = event.currentTarget.getAttribute('id');
  }

  backToPinedRepos(): void {
    this.router.navigate(['repos']);
  }

  downloadPatch(sha): void {
    this.repoDetailsServices.getCommitPatch(this.name, sha).subscribe(data => {
      this.downloadFile(data);
    });
  }

  downloadFile(data: any): void {
    let patchInfo = '';
    data.files.forEach(function(file) {
      patchInfo += file.patch;
    });
    this.fileName = data.sha + '.patch';
    const blob = new Blob([patchInfo]);
    saveAs(blob, this.fileName);
  }
}
