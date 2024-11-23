import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private  _httpClient: HttpClient) { }

  GetLoggedUserWishlist(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/wishlist`)
  }

  AddProductToWishlist(productId: string): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/wishlist`,
      {
        productId: productId,
      })
  }

  RemoveProductFromWishlist(productId: string): Observable<any> {
    return this._httpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${productId}`)
  }
}
