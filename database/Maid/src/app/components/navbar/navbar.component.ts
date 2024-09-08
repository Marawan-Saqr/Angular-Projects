import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchByIdService } from './search-by-id.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, private serv: SearchByIdService) {}



  // Search Function
  searchId: string = '';
  searchUserById() {
    if (this.searchId) {
      this.serv.searchUserById(this.searchId).subscribe((response: any) => {
        if (response.data) {
          this.router.navigate(['/list'], { queryParams: { user: JSON.stringify(response.data) } });
        } else {
          this.router.navigate(['/list'], { queryParams: { userNotFound: true } });
        }
      });
    } else {
      this.router.navigate(['/list']);
    }
  }




}
