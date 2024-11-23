import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IforgotPasswordDTO } from '../interfaces/iforgot-password-dto';
import { IResetCodeDTO } from '../interfaces/ireset-code-dto';
import { IResetPassDTO } from '../interfaces/ireset-pass-dto';
import { environment } from 'src/app/shared/base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private _httpClient: HttpClient) { }

  forgotPasswords(data: IforgotPasswordDTO): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`, data)
  }

  verifyResetCode(data: IResetCodeDTO): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`, data)
  }

  resetPassword(data: IResetPassDTO): Observable<any> {
    return this._httpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`, data)
  }
}
