import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoriesComponent } from './sub-categories.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { SubCategoryDetailsComponent } from './sub-category-details/sub-category-details.component';
import { AllProductsOnSubCategoryComponent } from './all-products-on-sub-category/all-products-on-sub-category.component';

const routes: Routes = [
  { path: '', component: SubCategoriesComponent , pathMatch:'prefix'},
  { path: 'subCategoryDetails/:subCategoryName/:subCategoryId', canActivate:[AuthGuard], component: SubCategoryDetailsComponent },
  { path: ':subcategoryId/products', canActivate: [AuthGuard], component: AllProductsOnSubCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesRoutingModule { }
