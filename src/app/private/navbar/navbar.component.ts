import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { GetusersService } from 'src/app/shared/getusers.service';
import { TitleService } from 'src/app/shared/title.service';
import { CountBookingService } from 'src/app/shared/countbooking.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable()
export class NavbarComponent implements OnInit {

  users: any;
  Profile: string;
  constructor(private router: Router, private getUsers: GetusersService, private title: TitleService, private count: CountBookingService) { }
  //logouts the user
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.count.count=0;
    this.getUsers.getDetails().subscribe(x => {
      this.users=x;
      const id = localStorage.getItem('id');
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].id == id){
          this.Profile=this.users[i].firstName + " " + this.users[i].lastName;
        }
      }
    this.router.navigate(['/nav/profile']);
    });
    
    
  }

}
