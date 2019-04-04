import { Component, OnInit } from '@angular/core';
import { GetusersService } from 'src/app/shared/getusers.service';
import {  Router } from '@angular/router';
import { TitleService } from 'src/app/shared/title.service';
import { UpdateProfile } from './updateprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  header: string = "Profile";
  users: any;
  user;
  fullname: string;
  //Object thats stores the updated details
  details: any= {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber:null,
    address: '',
    record: '',
    id: ''
  }
//function thats call the service to update the user details
  updateProfile(){
    console.log(this.details);
    const name = this.fullname.split(" ");
    this.details.firstName = name[0];
    this.details.lastName = name[1];
    this.updateProfileService.updateDetails(this.details, localStorage.getItem('id')).subscribe();
    window.location.reload();
    
  }
  constructor(private getUsers: GetusersService, private title: TitleService, private updateProfileService: UpdateProfile, private router: Router ){   }

  ngOnInit() {
    //gets all the users as the component is loaded
    this.getUsers.getDetails().subscribe(x => {
      this.users=x;     
      const id = localStorage.getItem('id');
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].id == id){
          this.user=this.users[i];
        }
      }
      // sets the details from the form fields
      this.fullname= this.user.firstName +" " + this.user.lastName;
      this.details.firstName =this.user.firstName;
      this.details.lastName = this.user.lastName;
      this.details.email = this.user.email;
      this.details.phoneNumber = this.user.phoneNumber;
      this.details.address = this.user.address;
      this.details.record = this.user.record;
      this.details.id = localStorage.getItem('id');
      
      
  });
 // sets the title to PROFILE
  this.title.title= "PROFILE";

}
}
