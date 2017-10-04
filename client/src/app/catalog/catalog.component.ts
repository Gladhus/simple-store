import { Component, OnInit } from '@angular/core';

import { Product } from  '../models/product.model';
import { CartItem } from '../models/cartitem.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products : Product[] = [];
  shoppingCart : CartItem[] = [];
  quantityValue : number; // And this is the value we will use in our functions.

  constructor(private productService : ProductService) {  }

  ngOnInit() {
    this.productService.getAll().subscribe(products => this.products = products);
   this.quantityValue = 1;
    var storageCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (storageCart != null){
      this.shoppingCart = storageCart;
    }
  }
  returnIfValueIsInt(param){ //Sub-function for updateQuantity.
    let intParam = parseInt(param);
    if( !isNaN( intParam )){ //Checked if the value is int, by controlling the NaN.
      return intParam;
    }
    else{
      return 0; // This value will not trigger the addProduct value, doing nothing.
    }
    
  }
  addToCart(product,quantityValue) {
    this.productService.addToCart(product,this.quantityValue);
  }
  updateQuantity(){ //Also updates the price list, and doesnt allow weird inputs.
    let QuantityHTML = <HTMLInputElement>(document.getElementById("quantity-input")); //Just a sub variable to avoid dirtiness.
    this.quantityValue = this.returnIfValueIsInt(QuantityHTML.value); // We assign the value if the given value is only an integer.

  }
}
