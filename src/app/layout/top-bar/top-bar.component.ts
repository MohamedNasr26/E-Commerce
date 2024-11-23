import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/core/i18n/translation.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  lang: string = '';
  isLogin:boolean = false;
  wishListItemmCount:number = 0;

  constructor(
    private _utilService: UtilService,
    private _translationService: TranslationService,
    private _sharedService:SharedService
  ){}

  ngOnInit(): void {
    this.getuserToken();
    this.GetLoggedUserWishlist();
    this.SetWishlistItemCount();
  }

  getuserToken(){
    this._sharedService.userToken.subscribe({
      next:() =>{
       if(this._sharedService.userToken.getValue()) this.isLogin = true
       else this.isLogin = false
      }
    })
  }

  setLanguage() {
    let lang = localStorage.getItem("lang");
    if (lang && lang === "en") {
      lang = "ar";

    } else {
      lang = "en";

    }
    // set language
    this._translationService.setLanguage(lang);
    // switch direction
    this._utilService.switchDirection(lang);
    // switch direction
    this._utilService.switchLang(lang);
    // reload root after change lang
    location.reload();
    //this.reloadCurrentRoute();
    // Lang
    this.lang = lang;
  }

  GetLoggedUserWishlist(){
    this._sharedService.GetLoggedUserWishlist().subscribe({
      next:(response) => {
        this._sharedService.wishlistItemCount.next(response.count)
      }
    })
  }

  SetWishlistItemCount(){
    this._sharedService.wishlistItemCount.subscribe(
      (res) => {
        this.wishListItemmCount = res;
      }
    )
  }

  signOut(){
    this._sharedService.signOut();
  }

}
