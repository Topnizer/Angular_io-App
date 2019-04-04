import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { GetusersService } from 'src/app/shared/getusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;

  // Login Form
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });
  hide = true;

 //Form to get all the login form controls
  get f() { return this.form.controls; }

  //Verifies if the credentials are valid
  submit(){
    this.getUsers.login(this.form.get('email').value).subscribe(user =>{
      if(user[0]!== undefined){
        if(user[0].password === this.form.get('password').value){
        localStorage.setItem('id',user[0].id);
          localStorage.setItem('loggedIn','true');
          this.router.navigate(['/nav']);
        }
        else{
          alert("Invalid Credentials");
            this.form.reset();
        }
      }
      else{
            alert("Invalid Credentials");
            this.form.reset();
            
            
          }
    })
    
  }
  constructor(private getUsers: GetusersService, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    
  }

}
