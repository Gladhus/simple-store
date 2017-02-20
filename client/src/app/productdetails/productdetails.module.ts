import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { ProductdetailsComponent } from './productdetails.component';

@NgModule({
  imports: [
    CommonModule,
    ProductdetailsRoutingModule
  ],
  declarations: [ProductdetailsComponent]
})
export class ProductdetailsModule { }
