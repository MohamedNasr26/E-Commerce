import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { HomeServiceService } from '../services/home-service.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  lang = localStorage.getItem('lang');
  productList: Products[] = [];
  layout: string = 'list';
  contentLoaded = false;
  isthereDiscount: boolean = false;
  searchTerm: string = '';

  constructor(
    private _homeService: HomeServiceService,
    private _sharedService: SharedService,
    private _messageService: MessageService,
    private _translateService: TranslateService
  ) {
    this._sharedService.setUserToken();
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.contentLoadedInterval();
  }

  getAllProducts() {
    this._homeService.getAllProducts().subscribe({
      next: (response) => {
        this.productList = response.data;
      }
    });
  }

  contentLoadedInterval() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }

  addProductToCart(id: string) {
    this._sharedService.AddProductToCart(id).subscribe({
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
      }
    });
  }

  addProductToWishList(id: string) {
    this._sharedService.AddProductToWishlist(id).subscribe({
      next: (response) => {
        this._sharedService.wishlistItemCount.next(response.data.length);
        this._messageService.clear();
        this._messageService.add({
          severity: 'success',
          summary: this._translateService.instant(
            'FORM.DIALOG_MESSAGE.SUCCESS'
          ),
          detail: this._translateService.instant(
            'FORM.DIALOG_MESSAGE.PRODUCT_ADDED_TO_WISHLIST'
          ),
        });
      }
    });
  }
}
