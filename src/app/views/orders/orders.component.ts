import { Component, OnInit } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { SOrdersService } from './services/sorders.service';
import { UserInfo } from './interfaces/user-info';
import { IshippingAddress } from './interfaces/ishipping-address';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  token: string = localStorage.getItem('userToken')!;
  userInfo: UserInfo = {} as UserInfo;
  userOrders: any[] = [];
  visible: boolean = false;
  shippingAddress:IshippingAddress = {} as IshippingAddress;

  constructor(private _sOrdersService: SOrdersService) { }

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.userInfo = jwtDecode(this.token);
    this.getUserOrders();
  }

  getUserOrders() {
    this._sOrdersService.getUserOrders(this.userInfo.id).subscribe({
      next: (response) => {
        this.userOrders = response;
      }
    })
  }

  showDialog(shippingAddress: any , orderId: string) {
      this.visible = true;
      this.shippingAddress = shippingAddress;
      this.shippingAddress.orderId = orderId;
  }
}
