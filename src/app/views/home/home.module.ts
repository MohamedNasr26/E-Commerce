import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CarouselModule } from 'primeng/carousel';
import { AllProductsComponent } from './all-products/all-products.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SearchByPipe } from 'src/app/shared/pipes/search-by.pipe';
import { DataNotFoundComponent } from 'src/app/shared/components/data-not-found/data-not-found.component';
@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    AllCategoriesComponent,
    AllProductsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TooltipModule,
    TranslateModule.forChild(),
    GalleriaModule,
    HttpClientModule,
    CarouselModule,
    DataViewModule,
    RatingModule,
    SkeletonModule,
    TagModule,
    FormsModule,
    ButtonModule,
    SearchByPipe,
    DataNotFoundComponent
    ]
})
export class HomeModule { }
