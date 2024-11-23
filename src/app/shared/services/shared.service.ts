import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userToken:BehaviorSubject<string> = new BehaviorSubject('');
  cartItemCount:BehaviorSubject<number> = new BehaviorSubject(0);
  wishlistItemCount:BehaviorSubject<number> = new BehaviorSubject(0);

  
  constructor(private _router:Router,private _httpClient: HttpClient) {
    if(localStorage.getItem("userToken")){
      let token = JSON.stringify(localStorage.getItem('userToken'));
      this.userToken.next(token);
    }
  }

  setUserToken(){
    let token = JSON.stringify(localStorage.getItem('userToken'));
    this.userToken.next(token);
  }

  signOut(){
    localStorage.removeItem("userToken");
    this.userToken.next('');
    this._router.navigate(['/login']);
  }

  GetLoggedUserCart(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/cart`)
  }

  AddProductToCart(productId: string): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/cart`,
      {
        productId: productId,
      })
  }

  GetLoggedUserWishlist(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/wishlist`)
  }

  AddProductToWishlist(productId: string): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/wishlist`,
      {
        productId: productId,
      })
  }
}
