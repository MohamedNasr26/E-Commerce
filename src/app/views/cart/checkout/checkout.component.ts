import { Component, OnInit } from '@angular/core';
import { SCartService } from '../services/scart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IshippingAddress } from '../interfaces/ishipping-address';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss', './../../../shared/style/authStyle.scss']
})
export class CheckoutComponent implements OnInit {

  cartId: string = '';
  lang = localStorage.getItem('lang');
  isLoading: boolean = false;

  checkoutForm = this._formBuilder.group({
    details: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  })

  constructor(
    private _SCartService: SCartService,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService,
    private _translateService: TranslateService,
    private _router: Router,
    private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.cartId = this._activatedRoute.snapshot.params['cartId'];
  }

  form() {
    return this.checkoutForm.controls;
  }

  CreateCashOrder() {
    this.checkoutForm.markAllAsTouched();
    const formValues = this.checkoutForm.value;
    if (this.checkoutForm.valid) {
      this._SCartService.CreateCashOrder(this.cartId, formValues as IshippingAddress).subscribe({
        next: (response) => {
          if (response.status == 'success') {
            this._messageService.clear();
            this._messageService.add({
              severity: 'success', summary: this._translateService.instant('CART.CONFIRMED'),
              detail: this._translateService.instant('CART.ORDER_CONFIRMED')
            });
            this._sharedService.cartItemCount.next(0);
            this._router.navigate(['/home']);
          }
        }
      })
    }
    else {
      return;
    }
  }

  CheckoutSession() {
    this.checkoutForm.markAllAsTouched();
    const formValues = this.checkoutForm.value;
    if (this.checkoutForm.valid) {
      this._SCartService.CheckoutSession(this.cartId, formValues as IshippingAddress).subscribe({
        next: (response) => {
          if(response.status=='success'){
            window.location.href = response.session.url;
          }
        }
      })
    }
    else {
      return;
    }
  }
}
