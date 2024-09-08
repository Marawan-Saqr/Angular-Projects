import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUsersService } from './get-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private serv: GetUsersService, private route: ActivatedRoute) {}


  users: any[] = [];
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['user']) {
        this.users = [JSON.parse(params['user'])];
      } else {
        this.loadUsers(this.currentPage);
      }
    });
  }

  loader = true;
  loadUsers(page: number) {
    this.serv.getUsersList(page).subscribe((response: any) => {
      this.loader = false;
      this.users = response.data;
    });
  }








  currentPage = 1;
  nextPage() {
    this.currentPage++;
    this.loadUsers(this.currentPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers(this.currentPage);
    }
  }
}


