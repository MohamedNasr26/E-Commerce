import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Products } from '../../products/interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-all-products-on-sub-category',
  templateUrl: './all-products-on-sub-category.component.html',
  styleUrls: ['./all-products-on-sub-category.component.scss'],
})
export class AllProductsOnSubCategoryComponent {
  lang = localStorage.getItem('lang');
  subCategoryId: string = '';
  productList: Products[] = [];
  productListOnSubCategory: Products[] = [];
  layout: string = 'list';
  contentLoaded = false;
  isthereDiscount: boolean = false;
  searchTerm: string = '';

  constructor(
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
    private _sharedService: SharedService,
    private _messageService: MessageService,
    private _translateService: TranslateService
  ) { }
  ngOnInit(): void {
    this.getSubcategoryId();
    this.getAllProducts();
    this.contentLoadedInterval();
  }

  getSubcategoryId() {
    this.subCategoryId = this._activatedRoute.snapshot.params['subcategoryId'];
  }

  getAllProducts() {
    this._categoriesService.getAllProducts().subscribe({
      next: (response) => {
        this.productList = response.data;
        this.productListOnSubCategory = this.productList.filter(
          (p) => p.subcategory[0]._id == this.subCategoryId
        );
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
