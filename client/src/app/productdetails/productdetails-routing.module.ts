import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdetailsComponent } from './productdetails.component';

const routes: Routes = [
  { path: '', component: ProductdetailsComponent }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductdetailsRoutingModule { }
