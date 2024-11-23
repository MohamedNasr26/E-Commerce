import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SCartService } from './services/scart.service';
import { CartObject, Product, Product2 } from './interfaces/IcartItem';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  lang = localStorage.getItem('lang');
  cartId:string = '';
  cartItems: any[] = [];
  totalCartPrice: any;

  constructor(
    private _sCartService: SCartService,
    private _messageService: MessageService,
    private _translateService: TranslateService,
    private _router: Router,
    private _confirmationService: ConfirmationService,
    private _sharedService:SharedService
  ) { }

  ngOnInit(): void {
    this.GetLoggedUserCart();
  }

  GetLoggedUserCart() {
    this._sCartService.GetLoggedUserCart().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.cartId = response.cartId;
          this.cartItems = response.data.products;
          this.totalCartPrice = response.data.totalCartPrice;
        }
      }
    });
  }

  checkout() {
    this._router.navigate([`/cart/checkout/${this.cartId}`]);
  }

  contiueShopping() {
    this._router.navigate(['/products']);
  }

  confirm(event: Event) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: this._translateService.instant('CART.ARE_YOU_SURE_TO_CLEAR_CART'),
      header: this._translateService.instant('CART.DELETE_CONFIRMATION'),
      icon: 'pi pi-trash fs-5',
      acceptButtonStyleClass: "p-button-Success p-button-text",
      rejectButtonStyleClass: "p-button-danger p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this._sCartService.ClearUserCart().subscribe({
          next: (response) => {
            if (response.message === 'success') {
              this.GetLoggedUserCart();
              this._sharedService.cartItemCount.next(0);
              this._messageService.clear();
              this._messageService.add({ severity: 'success', summary: this._translateService.instant('CART.CONFIRMED'), detail: this._translateService.instant('CART.Cart_EMPTY_SUCCESS') });
            }
          }
        });
      },
      reject: () => {
      }
    });
  }

  UpdateCartProductQuantity(productId: string, count: number) {
    if (count > 0) {
      this._sCartService.UpdateCartProductQuantity(productId, count).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.cartItems = response.data.products;
            this.totalCartPrice = response.data.totalCartPrice;
            this._sharedService.cartItemCount.next(response.data.products.length);
          }
        }
      });
    }
  }

  removeItem(productId: string) {
    this._sCartService.RemoveSpecificCartItem(productId).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.cartItems = response.data.products;
          this.totalCartPrice = response.data.totalCartPrice;
          this._sharedService.cartItemCount.next(response.data.products.length);
        }
      }
    });
  }
}
