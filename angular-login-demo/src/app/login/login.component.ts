import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

 // Get the current date and time as a date-time value.
 interface Food {
  value: string;
  viewValue: string;
}



@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }
    loginForm: FormGroup;
    isSubmitted  =  false;
    
  

  
    foods: Food[] = [
      {value: 'c-0', viewValue: 'India'},
      {value: 'c-1', viewValue: 'United States of America'},
      {value: 'c-2', viewValue: 'United Kingdom'}
    ];
    ngOnInit() 
    {

      this.loginForm  =  this.formBuilder.group({
        fname: ['', Validators.required],
        lname: [''],
        uname: ['',Validators.required],
        date: [' '],
        password: ['', Validators.required]
    });
    }
    get formControls() { return this.loginForm.controls; }
    login(){
      console.log(this.loginForm.value);
      this.isSubmitted = true;
      if(this.loginForm.invalid){
        return;
      }
      this.authService.login(this.loginForm.value);
      this.router.navigateByUrl('/admin');
    }
  }




