import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Products } from './interfaces/products';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  lang = localStorage.getItem('lang');
  productList: Products[] = [];
  layout: string = 'list';
  contentLoaded = false;
  isthereDiscount: boolean = false;
  searchTerm: string = '';

  constructor(
    private _productsService: ProductsService,
    private _sharedService: SharedService,
    private _messageService: MessageService,
    private _translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.contentLoadedInterval();
  }

  getAllProducts() {
    this._productsService.getAllProducts().subscribe({
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
