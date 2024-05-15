import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiServiceService } from 'src/services/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private apiService:ApiServiceService, private router:Router){

  }
  emailRegx=/^[a-z0-9+._]+@[a-z0-9_.]+\.[a-z]{2,4}$/
  passRegx=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$&@_*]).{7,}$/
  formData= new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailRegx)]),
    password: new FormControl('',[Validators.required,Validators.pattern(this.passRegx)]),
    cPassword: new FormControl('',[Validators.required]),
  })

  handleSignup(){
    this.apiService.postData('/register', {
      "first_name": this.formData.value.fname,
      "last_name": this.formData.value.lname,
      "email": this.formData.value.email,
      "password": this.formData.value.password,
  }).subscribe((data:any)=>{
    if(data.status === 'success'){
      this.router.navigate(['/dashboard'])
    }
    else{
      console.log(data);
    }
    })
  }
}
