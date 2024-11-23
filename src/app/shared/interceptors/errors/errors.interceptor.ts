import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private _messageService: MessageService, private _translateService: TranslateService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        this._messageService.clear();
        this._messageService.add({ severity: 'error', summary: this._translateService.instant('FORM.DIALOG_MESSAGE.ERROR_MESSAGE'), detail:error.error.message , sticky: true });
        throw error;
      })
    );
  }
}