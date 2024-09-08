import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchByIdService {

  constructor(private http: HttpClient) {}

  configUrl = "https://reqres.in/api/users";

  searchUserById(id: any) {
    return this.http.get(`${this.configUrl}/${id}`);
  }

}
