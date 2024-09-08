import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoUserDetailsService } from '../list-users/go-user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private serv: GoUserDetailsService, private router: ActivatedRoute) {}

  loader = true;
  user: any;
  ngOnInit(): void {
    const userId = this.router.snapshot.params['id'];
    this.serv.getUserById(userId).subscribe((data: any) => {
      this.loader = false;
      this.user = data.data;
    });
  }


}
