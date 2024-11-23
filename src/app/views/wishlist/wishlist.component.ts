import { Component, OnInit } from '@angular/core';
import { WishlistService } from './services/wishlist.service';
import { Iwishlist } from './interfaces/iwishlist';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  lang = localStorage.getItem('lang');
  wishlistItems: Iwishlist[] = [];

  constructor(
    private _wishlistService: WishlistService,
    private _sharedService: SharedService,
    private _messageService: MessageService,
    private _translateService: TranslateService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.GetLoggedUserWishlist();
  }

  GetLoggedUserWishlist() {
    this._wishlistService.GetLoggedUserWishlist().subscribe({
      next: (response) => {
        this.wishlistItems = response.data;
      },
    });
  }

  RemoveProductFromWishlist(productId: string) {
    this._wishlistService.RemoveProductFromWishlist(productId).subscribe({
      next: (response) => {
        this.GetLoggedUserWishlist();
      },
    });
  }

  AddProductToCart(productId: string) {
    this._sharedService.AddProductToCart(productId).subscribe({
      next: (response) => {
        this._sharedService.cartItemCount.next(response.numOfCartItems);
        this._messageService.clear();
        this._messageService.add({
          severity: 'success',
          summary: this._translateService.instant(
            'FORM.DIALOG_MESSAGE.SUCCESS'
          ),
          detail: this._translateService.instant(
            'FORM.DIALOG_MESSAGE.PRODUCT_ADDED_TO_CART'
          ),
        });
      },
    });
  }

  contiueShopping() {
    this._router.navigate(['/products']);
  }
}
