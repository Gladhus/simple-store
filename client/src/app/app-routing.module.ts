import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
  { path: 'shoppingcart', loadChildren: 'app/shoppingcart/shoppingcart.module#ShoppingcartModule' },
  { path: 'productdetails/:id', loadChildren: 'app/productdetails/productdetails.module#ProductdetailsModule' },
  { path: '', component: CatalogComponent },
  { path: 'productdetails', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}