import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { TranslateModule } from '@ngx-translate/core';
import { DataNotFoundComponent } from 'src/app/shared/components/data-not-found/data-not-found.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    TagModule,
    RatingModule,
    TranslateModule.forChild(),
    DataNotFoundComponent,
    OverlayPanelModule,
    ChipsModule,
    DialogModule
  ]
})
export class OrdersModule { }
