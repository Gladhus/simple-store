import { Component, OnInit } from '@angular/core';

import { Product } from  '../models/product.model';
import { CartItem } from '../models/cartitem.model';

@Component({
  selector: 'shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  shoppingCart: CartItem[] = [];

  constructor() {
  }

  ngOnInit() {
    const uncleanArray = JSON.parse(localStorage.getItem("shoppingCart"));
    if (uncleanArray != null){
      for (let i = 0; i < uncleanArray.length; ++i){
        if (uncleanArray[i] != null) {
          this.shoppingCart.push(<CartItem>uncleanArray[i]);
        }
      }
    }
  }

  updateQuantity(cartItem, quantity: number) {
    if(quantity != 0 && !isNaN(quantity)) // Fixed a bug that causes price to act weird.
    {
      this.shoppingCart.forEach(item => {
        if (item == cartItem) {
          const pricePerOne = item.totalPrice / item.quantity;
          item.quantity = quantity;
          item.totalPrice = quantity * pricePerOne;
        }
      });
      localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    }
    else{
      alert('Please enter a proper quantity number.');
    }
    
  }

  clearCart(){
    localStorage.removeItem("shoppingCart");
    location.reload();
  }

  removeItem(cartItem){
    this.shoppingCart = this.shoppingCart.filter(item => item != cartItem);
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
  }
}
