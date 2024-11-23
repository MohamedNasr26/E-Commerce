import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { ActiveLoginGuard } from './shared/guard/active-login.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'products', canActivate: [AuthGuard], loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) },
  { path: 'login', canActivate: [ActiveLoginGuard], loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },
  { path: 'register', canActivate: [ActiveLoginGuard], loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule) },
  { path: 'forgotPassword', canActivate: [ActiveLoginGuard], loadChildren: () => import('./views/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'brands', canActivate: [AuthGuard], loadChildren: () => import('./views/brands/brands.module').then(m => m.BrandsModule) },
  { path: 'categories', canActivate: [AuthGuard], loadChildren: () => import('./views/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'subCategories', canActivate: [AuthGuard], loadChildren: () => import('./views/subcategories/subcategories.module').then(m => m.SubcategoriesModule) },
  { path: 'allorders', canActivate: [AuthGuard], loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'cart', canActivate: [AuthGuard], loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule) },
  { path: 'wishlist', canActivate: [AuthGuard], loadChildren: () => import('./views/wishlist/wishlist.module').then(m => m.WishlistModule) },
  { path: 'contact', canActivate: [AuthGuard], loadChildren: () => import('./views/contact-us/contact-us.module').then(m => m.ContactUsModule) },

  { path: '**', loadChildren: () => import('./views/error404/error404.module').then(m => m.Error404Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
