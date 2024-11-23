import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    AutoFocusModule,
    HttpClientModule

  ]
})
export class ForgotPasswordModule { }
