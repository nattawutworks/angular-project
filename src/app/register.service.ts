import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { listUser, user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = `${environment.apiUrl}/odds`;

  constructor(private httpClient: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  creatUser(user: user): Observable<user> {
    console.log('Service is running ...');
    console.log(user);
    return this.httpClient.post<user>(
      this.registerUrl,
      user,
      this.httpOption)
  }

  // listAllUser( listUser : listUser ): Observable<user> {
  //   console.log('ListAllUser');
  //   console.log(listUser);
  //   return this.httpClient.get<listUser>(
  //     this.registerUrl,
  //     listUser,
  //     this.httpOption)
  // }
}

