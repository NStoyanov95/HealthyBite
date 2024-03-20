import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/api')) {
      req = req.clone({
        url: req.url.replace('/api', apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(req);
  }
}

export const AppInterceptorProvider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
};
