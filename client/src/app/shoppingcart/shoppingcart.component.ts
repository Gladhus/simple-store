import { Component, OnInit } from '@angular/core';

import { Product } from  '../models/product.model';
import { CartItem } from '../models/cartitem.model';

@Component({
	selector: 'shoppingcart',
	templateUrl: './shoppingcart.component.html',
	styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

	shoppingCart = [];

	constructor() {
	}

	ngOnInit() {
		var uncleanArray = JSON.parse(localStorage.getItem("shoppingCart"));
		if(uncleanArray != null){
			for(var i = 0; i < uncleanArray.length; ++i){
				if(uncleanArray[i] != null) {
					this.shoppingCart.push(uncleanArray[i]);
				}
			}
		}
	}

	clearCart(){
		localStorage.removeItem("shoppingCart");
		location.reload();
	}
}