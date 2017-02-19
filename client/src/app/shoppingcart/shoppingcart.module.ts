import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingcartRoutingModule } from './shoppingcart-routing.module';
import { ShoppingcartComponent } from './shoppingcart.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingcartRoutingModule
  ],
  declarations: [ShoppingcartComponent],
  providers: [],
  exports: [
  	ShoppingcartComponent
  ]
})
export class ShoppingcartModule { }
