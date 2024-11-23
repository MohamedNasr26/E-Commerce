import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({ providedIn: 'root' })
export class UtilService {

  // ------------ switch direction ------------
  switchDirection = (lang: string) => $('#switchDirection').attr('dir', lang === 'en' ? 'ltr' : 'rtl');
  switchLang = (lang: string) => $('#switchLang').attr('lang', lang === 'en' ? 'en' : 'ar');
}
