import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SbrandService {

  constructor(private _httpClient:HttpClient) { }

  GetAlBrands():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/api/v1/brands`);
  }

  GetSpecificBrand(brandId:string):Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/api/v1/brands/${brandId}`);
  }
}
