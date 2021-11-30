import { LoginService } from './../services/login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {

    constructor(
        private loginService: LoginService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let token = this.loginService.getToken();

        if(token!=null) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }

        return next.handle(req);
    }
}