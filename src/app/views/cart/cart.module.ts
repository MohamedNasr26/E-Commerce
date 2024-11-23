import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { DataViewModule } from 'primeng/dataview';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckoutComponent } from './checkout/checkout.component';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    DataViewModule,
    TranslateModule.forChild(),
    ButtonModule,
    TagModule,
    RatingModule,
    FormsModule,
    TooltipModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    AutoFocusModule,
    InputTextModule
  ],
  providers: [ConfirmationService],
})
export class CartModule { }
