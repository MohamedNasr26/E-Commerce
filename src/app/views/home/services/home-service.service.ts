import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private _httpClient:HttpClient) { }

  getAllCategories():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/api/v1/categories`);
  }

  getAllProducts():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/api/v1/products`);
  }
}
