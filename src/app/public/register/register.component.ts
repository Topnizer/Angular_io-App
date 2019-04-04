import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { PasswordMatch } from './passwordmatch.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) { }
  
  //Function for Registering a user with all valid details
  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    this.registerService.registerDetails(this.registerForm.value).subscribe();
    this.router.navigate(['/login']);
 
 

  }

  ngOnInit() {
    //Form is build as the register page is visited
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address:['', [Validators.required]],
      record:[''],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: PasswordMatch('password', 'confirmPassword')
  });
}
//Function to get all the form controls of the form
get f() { return this.registerForm.controls; }


}
