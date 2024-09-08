import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient) {}

  configUrl = "https://reqres.in/api/users?page=";

  getUsersList(page: number) {
    return this.http.get(this.configUrl + page);
  }

}
