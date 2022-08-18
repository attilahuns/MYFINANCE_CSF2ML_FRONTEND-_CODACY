import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/loader/loader.service';

export const IS_LOADER_NOT_TRIGGERED = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(public loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context.get(IS_LOADER_NOT_TRIGGERED)) {
      return next.handle(req);
    }
    this.loaderService.showLoader();

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.hideLoader();
      })
    )
  }
}
