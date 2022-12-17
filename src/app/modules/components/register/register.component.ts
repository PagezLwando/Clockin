import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    cellNumber: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
  })


  ngOnInit(): void {
    console.log('init called');
  }

  onSubmit(): void {
    console.log('Submitted');
  }

}
