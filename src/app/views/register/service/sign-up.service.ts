import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpDTO } from '../interfaces/sign-up-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _httpClient:HttpClient) {}

  signUp(data:SignUpDTO):Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/api/v1/auth/signup`,data);
  }
}
