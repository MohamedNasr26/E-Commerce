import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SearchByPipe } from 'src/app/shared/pipes/search-by.pipe';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DataNotFoundComponent } from 'src/app/shared/components/data-not-found/data-not-found.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule,
    ButtonModule,
    SkeletonModule,
    TooltipModule,
    TranslateModule.forChild(),
    GalleriaModule,
    BreadcrumbModule,
    SearchByPipe,
    ProgressSpinnerModule,
    DataNotFoundComponent
    ]
})
export class ProductsModule { }
