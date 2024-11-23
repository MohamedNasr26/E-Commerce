import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { SignInService } from './service/sign-in.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../../shared/style/authStyle.scss']
})
export class LoginComponent{
  lang = localStorage.getItem("lang");
  errorMsg: string = '';
  isLoading: boolean = false;
  signIpSubscribe: any;

  loginForm: FormGroup = this._formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _messageService: MessageService,
    private _translateService: TranslateService,
    private _router: Router,
    private _signInService: SignInService,
    private _sharedService:SharedService
  ) { }

  get form() {
    return this.loginForm.controls;
  }

  login(form: FormGroup) {
    this.loginForm.markAllAsTouched();
    const formData = this.loginForm.value;
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.signIpSubscribe = this._signInService.signIn(formData).subscribe({
        next: (res: any) => {
          if (res.message == "success") {
            this.isLoading = false;
            this._messageService.clear();
            this._messageService.add({ severity: 'success', summary: this._translateService.instant('FORM.DIALOG_MESSAGE.SUCCESS'), detail: this._translateService.instant('FORM.DIALOG_MESSAGE.LOGIN_SUCCESS') });
            localStorage.setItem("userToken", res.token);
            this._sharedService.setUserToken();
            this._router.navigate(['/home']);
          }
        }
      })
    }
  }
}
