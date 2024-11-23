import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HttpClientModule} from '@angular/common/http';
import { AutoFocusModule } from 'primeng/autofocus';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    AutoFocusModule,
    RxReactiveFormsModule,
    HttpClientModule
  ],
  providers:[]
})
export class RegisterModule { }
