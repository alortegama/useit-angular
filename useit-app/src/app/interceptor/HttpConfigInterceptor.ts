import {Injectable} from '@angular/core';

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(
        () => {
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            switch (error.status) {
              case 0:
                Toast.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'No se ha podido connectar al servidor!',
                });
                break;
              case 500:
                if (error.url.includes('crear-agenda')) {
                  Toast.fire({
                    type: 'error',
                    title: 'Error',
                    text: 'No s\'ha pogut crear l\'esdeveniment',
                  });
                } else {
                  Toast.fire({
                    type: 'error',
                    title: 'Error',
                    text: error.message.toString(),
                  });
                }
                break;
              case 404:
                Toast.fire({
                  type: 'error',
                  title: 'Error',
                  text: 'No s\'ha trobat la pagina sol·licitada',
                });
                break;
              case 401:
                Toast.fire({
                  type: 'error',
                  title: 'Error',
                  text: 'Has d\'estar loggejat per la visualització de la pàgina',
                });
                break;
              case 403:
                Toast.fire({
                  type: 'error',
                  title: 'Error',
                  text: 'No tens permissos per la pàgina sol·licitada',
                });
                break;
              default:
                Toast.fire({
                  type: 'error',
                  title: 'Error',
                  text: this.extractErrorMessage(error),
                });

            }
          }
        })
    );
  }


  private extractErrorMessage(error: HttpErrorResponse): string {
    if (error.error) {
      if (error.error.errors) {
        return error.error.errors.map(e => e.entity + ' ' + e.property + ': ' + e.message).join(', ');
      }
      let cause = error.error;
      while (cause.cause) {
        cause = cause.cause;
      }
      return cause.message;
    } else if (error.message) {
      return error.message;
    } else {
      return error.name;
    }
  }
}
