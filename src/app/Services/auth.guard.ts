import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice:AuthService,
    private router:Router
  ){}


  canActivate():boolean{
    const token=localStorage.getItem('token');
    if(!this.authservice.gettoken()){
      this.router.navigateByUrl('/signin')
      return false
    }
    return true
  }
      
}
