import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { SignUpService } from './service/sign-up.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../../shared/style/authStyle.scss']
})
export class RegisterComponent{
  lang = localStorage.getItem("lang");
  errorMsg:string ='';
  isLoading:boolean = false;
  signUpSubscribe:any;

  registerForm: FormGroup = this._formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,11}$/)]),
    rePassword: new FormControl('', [RxwebValidators.compare({ fieldName: 'password' }), Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,11}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125]-[0-9]{8}$/)])
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _signUpService: SignUpService,
    private _messageService: MessageService,
    private _translateService: TranslateService,
    private _router:Router) { }

  get form() {
    return this.registerForm.controls
  }

  register(form: FormGroup) {
    this.registerForm.markAllAsTouched();
    const formData = this.registerForm.value;
    if (this.registerForm.valid && !this.isLoading) {
      this.isLoading = true;
      formData.phone = formData.phone.replace(/[^0-9 ]/g, "");
      this.signUpSubscribe = this._signUpService.signUp(this.registerForm.value).subscribe({
        next :(res:any) => {
          if(res.message =="success"){
            this.isLoading = false;
            this._messageService.clear();
            this._messageService.add({ severity: 'success', summary: this._translateService.instant('FORM.DIALOG_MESSAGE.SUCCESS'), detail:this._translateService.instant('FORM.DIALOG_MESSAGE.REGISTRATION_SUCCESS')});
            this._router.navigate(['/home']);
          }
        }
      })
    }
  }
}
