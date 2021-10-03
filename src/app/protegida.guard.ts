import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { ServicesService } from './services/services.service';

@Injectable({
  providedIn: 'root'
})
export class ProtegidaGuard implements CanActivate {
  constructor(private service:ServicesService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.ingresa){
        return true;
      }else{
        return false;
      }
      }
  
}

