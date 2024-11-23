import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch:'prefix' },
  { path: 'productDetails/:productTitle/:productId', canActivate:[AuthGuard], component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
