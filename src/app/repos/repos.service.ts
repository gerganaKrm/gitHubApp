import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any> {

    return this.http.get('http://localhost:3000/repos');
  }
}
