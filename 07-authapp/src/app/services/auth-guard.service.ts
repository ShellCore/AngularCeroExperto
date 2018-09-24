import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.auth.isAuthenticated()) {
            console.log("Pasó el guard");
            return true;
        } else {
            console.error("Bloqueado por el guard");
            return false;
        }
    }
}
