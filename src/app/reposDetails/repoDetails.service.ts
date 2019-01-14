import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepoDetailsService {

  constructor(private http: HttpClient) {}

  getReposDetails(name: string): Observable<any> {

    return this.http.get('http://localhost:3000/repoDetails', {params: {repoName: name}});
  }
  getReposDescription(name: string): Observable<any> {

    return this.http.get('http://localhost:3000/repoDescription', {params: {repoName: name}});
  }

  getCommitPatch(name: string, sha: string): Observable<any> {

    return this.http.get('http://localhost:3000/commitPatch', {params: {repoName: name, sha: sha}});
  }
}
