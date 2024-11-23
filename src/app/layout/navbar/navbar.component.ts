import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  lang = localStorage.getItem("lang");
  isLogin:boolean = false;
  cartItemCount:number = 0;

  constructor(private _sharedService:SharedService){}
  
  ngOnInit(): void {
    this.checkIslogin();
    this.getCartItemCount();
    this.SetCartItemCount();
  }
  
  checkIslogin(){
    this._sharedService.userToken.subscribe({
      next:() =>{
       if(this._sharedService.userToken.getValue()) this.isLogin = true
       else this.isLogin = false
      }
    })
  }

  getCartItemCount(){
    this._sharedService.GetLoggedUserCart().subscribe({
      next:(response) => {
          this._sharedService.cartItemCount.next(response.numOfCartItems)
      }
    })
  }

  SetCartItemCount(){
    this._sharedService.cartItemCount.subscribe(
      (res) => {
        this.cartItemCount = res;
      }
    )
  }

}
