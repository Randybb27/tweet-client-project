import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  sign(newUser: User) {
    throw new Error('Method not implemented.');
  }
  signIn(newUser: User){
    return this.http.post(`${this.baseURL}/users`, newUser);

  }

  baseURL: string = "https://localhost:4200/api";

  constructor(private http: HttpClient) { }

  signUp(newUser: User){
    return this.http.post(`${this.baseURL}/users`, newUser);

  }

  login(email: string, password: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseURL}/signin`,  { params: queryParams, responseType: 'text' })
      .pipe(tap((response: any) => {
        localStorage.setItem('myTweetToken', response);
      }));
}

searchUser(searchTerm : string):Observable<User[]> {
  return this.http.get<User[]>(`${this.baseURL}/users?q=${searchTerm}`);

}
}
