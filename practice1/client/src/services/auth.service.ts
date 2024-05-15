import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn(){
    return localStorage.getItem('auth-token')
  }
  setToken(name:string,token:string){
    localStorage.setItem(name, token)
  }
  getToken(name:string){
    return localStorage.getItem(name)
  }
  removeToken(name:string){
    localStorage.removeItem(name)
  }
}
