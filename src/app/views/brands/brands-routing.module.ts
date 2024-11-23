import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

const routes: Routes = [
  { path: '', component: BrandsComponent, pathMatch:'prefix' },
  { path: 'brandDetails/:brandName/:brandId', canActivate:[AuthGuard], component: BrandDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
