import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, finalize, Observable, throwError } from "rxjs";

// @Injectable()
// export class RequestInterceptor implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         console.log('intercept')
//         const modifiedReq = req.clone({
//             headers: req.headers.set('Authorization', 'Bearer asdf')
//         })
//         return next.handle(modifiedReq);
//     }
// }

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    console.log('request', req, next);
   //  const cookieService = inject(CookieService);

   // this.loaderService.isShowLoader(true)
    const token = localStorage.getItem('your-token');
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          authorization: "Bearer " + token,
        },
        // body : {
        //   ...req.body,
        //   version : 123
        // }
      });
      return next(cloned).pipe(catchError((error: HttpErrorResponse) => {
        // Dialog open // snackbar
        return throwError(() => new Error(error.message));
      }), finalize(() => {
        // this.loaderService.isShowLoader(false);
        // console.log('Sequence complete')
      }));
    } else {
      return next(req);
    }
};

// Login // username and password
// response token // localstorge setItem('your-token
// interceptor getToken