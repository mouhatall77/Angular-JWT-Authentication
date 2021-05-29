import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, //To build and send forms
    private http: HttpClient, 
    private router: Router    //To redirect
    ) {

     }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }

}
