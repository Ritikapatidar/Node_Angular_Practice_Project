import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/services/api-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiServiceService, private router:Router, private authService:AuthService, private toastr:ToastrService){
  }
  ngOnInit(){
    if(this.authService.isLoggedIn()){
      this.router.navigate(['dashboard'])
    }
  }
  emailRegx=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  passRegx=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[_$@*&]).{7,}$/
  loginForm= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegx)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passRegx)])
  })

  handleLogin(){
    if(this.loginForm.valid)
    {
      this.apiService.postData('/login', this.loginForm.value).subscribe((data:any)=>{
        if(data.status === 'success' && data.token)
        {
          this.authService.setToken('auth-token',data.token)
          this.authService.setToken('auth-user',data.user)
          this.router.navigate(['/dashboard'])
          this.toastr.success(data.msg)
        }
        else{
          alert('Error: '+data.msg)
        }
      })
    }
  }
}
