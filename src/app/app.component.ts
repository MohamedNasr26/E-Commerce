import { Component } from '@angular/core';
import { TranslationService } from './shared/core/i18n/translation.service';
import { UtilService } from './shared/services/util.service';
import { LanguagesEnum } from './shared/enums/LanguagesEnum';
import { locale as arLang } from './shared/core/i18n/ar';
import { locale as enLang } from './shared/core/i18n/en';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-Commerce';
  lang: string = '';
  isLogin:boolean = false;
  
  constructor(
    private _translationService: TranslationService,
    private _utilService: UtilService,
    private _sharedService:SharedService) {

    // Set Language
    let lang = localStorage.getItem("lang");
    if (lang) {
      this.lang = lang;
    } else {
      this.lang = LanguagesEnum.English
      localStorage.setItem("lang", this.lang)
    }

    this._translationService.setLanguage(this.lang);
    this._utilService.switchLang(this.lang);
    this._utilService.switchDirection(this.lang);
    this._translationService.loadTranslations(enLang, arLang);


    // Check if user is logged in
    this._sharedService.userToken.subscribe({
      next:() =>{
       if(this._sharedService.userToken.getValue()) this.isLogin = true
       else this.isLogin = false
      }
    })
  }
}
