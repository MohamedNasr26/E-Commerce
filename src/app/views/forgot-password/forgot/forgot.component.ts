import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ForgotService } from '../service/forgot.service';
import { IforgotPasswordDTO } from '../interfaces/iforgot-password-dto';
import { IResetCodeDTO } from '../interfaces/ireset-code-dto';
import { IResetPassDTO } from '../interfaces/ireset-pass-dto';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss', './../../../shared/style/authStyle.scss']
})
export class ForgotComponent {
  lang = localStorage.getItem("lang");
  isLoading: boolean = false;
  isLoading2: boolean = false;
  errorMsg: string = '';
  stepNumber: number = 1;
  counter: number = 90

  resetEmailForm = this._formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  resetCodeForm = this._formBuilder.group({
    resetCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)]),
  })
  resetPasswordForm = this._formBuilder.group({
    email: new FormControl(),
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,11}$/)])
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _messageService: MessageService,
    private _translateService: TranslateService,
    private _router: Router,
    private _sharedService: SharedService,
    private _forgotService: ForgotService
  ) { }

  get resetEmailform() {
    return this.resetEmailForm.controls;
  }

  get resetCodeform() {
    return this.resetCodeForm.controls;
  }

  get resetPasswordform() {
    return this.resetPasswordForm.controls;
  }

  resetEmail(form: FormGroup) {
    this.resetEmailForm.markAllAsTouched();
    if (this.resetEmailForm.valid && !this.isLoading) {
      const formData: IforgotPasswordDTO = {
        email: form.value.email
      }
      this.isLoading = true;
      this._forgotService.forgotPasswords(formData).subscribe({
        next: (res: any) => {
          if (res.statusMsg == "success") {
            this.isLoading = false;
            this.stepNumber = 2;
            this.counterDown();
            this.resetPasswordForm.controls.email.patchValue(form.value.email);
            this._messageService.clear();
            this._messageService.add({ severity: 'success', life: 8000, summary: this._translateService.instant('FORM.DIALOG_MESSAGE.SUCCESS'), detail: this._translateService.instant('FORGOT_PASSWORD.CODE_SENT') });
          }
        }
      })
    }
  }

  resetEmailAnotherTime(form: FormGroup) {
    const formData: IforgotPasswordDTO = {
      email: form.value.email
    }
    this.isLoading2 = true;
    this._forgotService.forgotPasswords(formData).subscribe({
      next: (res: any) => {
        if (res.statusMsg == "success") {
          this.isLoading2 = false;
          this.counter = 90;
          this.counterDown();
          this._messageService.clear();
          this._messageService.add({ severity: 'success', life: 8000, summary: this._translateService.instant('FORM.DIALOG_MESSAGE.SUCCESS'), detail: this._translateService.instant('FORGOT_PASSWORD.CODE_SENT') });
        }
      }
    })
  }

  resetCode(form: FormGroup) {
    this.resetCodeForm.markAllAsTouched();
    if (this.resetCodeForm.valid && !this.isLoading) {
      const formData: IResetCodeDTO = {
        resetCode: form.value.resetCode
      }
      this.isLoading = true;
      this._forgotService.verifyResetCode(formData).subscribe({
        next: (res: any) => {
          if (res.status == "Success") {
            this.isLoading = false;
            this.stepNumber = 3;
            this._messageService.clear();
            this._messageService.add({ severity: 'success', life: 5000, summary: this._translateService.instant('FORM.DIALOG_MESSAGE.SUCCESS'), detail: this._translateService.instant('VERIFICATION_CODE.VERFIIED_SUCCESS') });
          }
        }
      })
    }
  }

  counterDown() {
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      if (this.counter === 0) clearInterval(intervalId)
    }, 1000)
  }

  resetPassword(form: FormGroup) {
    this.resetPasswordForm.markAllAsTouched();
    if (this.resetPasswordForm.valid && !this.isLoading) {
      const formData: IResetPassDTO = {
        email: form.value.email,
        newPassword: form.value.newPassword
      }
      this.isLoading = true;
      this._forgotService.resetPassword(formData).subscribe({
        next: (res: any) => {
            this.isLoading = false;
            this._messageService.clear();
            this._messageService.add({ severity: 'success', life: 5000, summary: this._translateService.instant('FORM.DIALOG_MESSAGE.SUCCESS'), detail: this._translateService.instant('RESET_PASSWORD.RESET_PASSWORD_SUCCESS') });
            localStorage.setItem("userToken", res.token);
            this._sharedService.setUserToken();
            this._router.navigate(['/home']);
        }
      })
    }
  }
}
