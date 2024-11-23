import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoriesRoutingModule } from './subcategories-routing.module';
import { SubCategoryDetailsComponent } from './sub-category-details/sub-category-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { SubCategoriesComponent } from './sub-categories.component';
import { AllProductsOnSubCategoryComponent } from './all-products-on-sub-category/all-products-on-sub-category.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { GalleriaModule } from 'primeng/galleria';
import { RatingModule } from 'primeng/rating';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SearchByPipe } from 'src/app/shared/pipes/search-by.pipe';
import { DataNotFoundComponent } from 'src/app/shared/components/data-not-found/data-not-found.component';


@NgModule({
  declarations: [
    SubCategoriesComponent,
    SubCategoryDetailsComponent,
    AllProductsOnSubCategoryComponent
  ],
  imports: [
    CommonModule,
    SubcategoriesRoutingModule,
    TranslateModule.forChild(),
    HttpClientModule,
    CardModule,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule,
    ButtonModule,
    SkeletonModule,
    TooltipModule,
    GalleriaModule,
    BreadcrumbModule,
    ProgressSpinnerModule,
    SearchByPipe,
    DataNotFoundComponent
  ]
})
export class SubcategoriesModule { }
