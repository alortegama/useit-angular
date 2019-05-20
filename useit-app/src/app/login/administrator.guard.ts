import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import Swal from 'sweetalert2';
import {AuthenticationBasicService} from './authentication-basic.service';


@Injectable()
export class AdministratorGuard implements CanActivate {

  constructor(private authentication: AuthenticationBasicService) {
  }

  canActivate(): boolean {
    if (!this.authentication.isLoggedIn() || !this.authentication.isAdmin()) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      });
      Toast.fire({
        type: 'error',
        title: 'You should be an administrator to perform this action'
      });
    }
    return this.authentication.isLoggedIn() && this.authentication.isAdmin();
  }
}
