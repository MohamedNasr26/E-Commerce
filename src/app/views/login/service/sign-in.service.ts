import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInDTO } from '../interfaces/sign-in-dto';
import { environment } from 'src/app/shared/base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _httpClient:HttpClient) {}

  signIn(data:SignInDTO):Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/signin`,data);
  }
}
