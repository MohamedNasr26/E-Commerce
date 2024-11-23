import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AllSubCategoryOnCategoryComponent } from './all-sub-category-on-category/all-sub-category-on-category.component';
import { AllProductsOnSubCategoryComponent } from './all-products-on-sub-category/all-products-on-sub-category.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent, pathMatch: 'prefix' },
  { path: 'categoryDetails/:categoryName/:categoryId', canActivate: [AuthGuard], component: CategoryDetailsComponent },
  { path: ':categoryId/subcategories', canActivate: [AuthGuard], component: AllSubCategoryOnCategoryComponent },
  { path: 'subcategories/:subcategoryId/products', canActivate: [AuthGuard], component: AllProductsOnSubCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
