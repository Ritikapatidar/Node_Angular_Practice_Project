import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService:AuthService, private router:Router){

  }
  handleLogout(){
    this.authService.removeToken('auth-token')
    this.authService.removeToken('auth-user')
    this.router.navigate(['/login'])
  }
}
