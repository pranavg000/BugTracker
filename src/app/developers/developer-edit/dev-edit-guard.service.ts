import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class DeveloperEditGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
        if(route.params.id === this.authService.user.uid) return true;
        this.router.navigate(['/developers',route.params.id]);
        return false;

    }

}