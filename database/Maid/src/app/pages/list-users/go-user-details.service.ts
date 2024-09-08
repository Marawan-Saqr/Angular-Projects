import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoUserDetailsService {

  constructor(private http: HttpClient) {}

  configUrl = "https://reqres.in/api/users";

  getUserById(id: number) {
    return this.http.get(`${this.configUrl}/${id}`);
  }

}
