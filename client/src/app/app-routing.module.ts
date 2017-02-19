import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
  { path: 'shoppingcart', loadChildren: 'app/shoppingcart/shoppingcart.module#ShoppingcartModule' },
  { path: '', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}