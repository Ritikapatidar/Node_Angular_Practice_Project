import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/services/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private apiService:ApiServiceService, private router:Router){}
  formData= new FormGroup({
    password: new FormControl('', [Validators.required]),
    c_password: new FormControl('', [Validators.required])
  })
  email!:string
  otp!:string
  password!:string
  c_password!:string
  isOtpSended:boolean=false
  isOtpVerified:boolean=false
  isLoading:boolean=false
  
  sendOtp(){
    if(this.email){
      this.isLoading=true;
      this.apiService.postData('/generateOtp', {email:this.email}).subscribe((data:any)=>{
        this.isLoading=false;
        if(data.status === 'success'){
          this.isOtpSended=true;
        }
        else{
          console.log(data);
        }
      })
    }
  }
  verifyOtp(){
    this.isLoading=true;
    this.apiService.postData('/verifyOtp', { email:this.email, otp:this.otp }).subscribe((data:any)=>{
      this.isLoading=false;
      if(data.status === 'success'){
        this.isOtpSended=true
        this.isOtpVerified=true
      }
      else{
        console.log(data);
      }
    })
  }
  handleForgotPassword(){
    this.isLoading=true;
    this.apiService.postData('/forgot-password', { email:this.email, password:this.password }).subscribe((data:any)=>{
      this.isLoading=false;
      if(data.status === 'success'){
        alert("Password Successfully updated!")
        this.router.navigate(['/login'])
      }
      else{
        console.log(data);
      }
    })
  }
}
