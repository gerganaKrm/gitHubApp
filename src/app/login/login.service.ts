import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  // Mock login TBD auth github?
  login(user, pass): Observable<any> {

     return this.http.post('http://localhost:3000/login', {user: user, password: pass});
  }
}

